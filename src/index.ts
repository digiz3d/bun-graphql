import { createYoga } from 'graphql-yoga'
import { makeHandler, handleProtocols } from 'graphql-ws/lib/use/bun'
import { PubSub } from 'graphql-subscriptions'

import schema from './schema'
import { Context } from './graphql/context'

const pubsub = new PubSub()

const context: Context = { pubsub }

const yoga = createYoga({
  context,
  cors: { origin: '*' },
  graphiql: { subscriptionsProtocol: 'WS' },
  graphqlEndpoint: '/graphql',
  healthCheckEndpoint: '/healthz',
  maskedErrors: false,
  schema,
})

const server = Bun.serve({
  fetch(req, serv) {
    if (req.headers.get('upgrade') === 'websocket') {
      if (!handleProtocols(req.headers.get('sec-websocket-protocol') || '')) {
        return new Response('Bad Request', { status: 400 })
      }
      if (!serv.upgrade(req)) {
        return new Response('Bad Request', { status: 400 })
      }
    }
    return yoga(req, serv)
  },
  websocket: makeHandler({ schema, context }),
})

console.info(`Server is running on ${new URL('/graphql', `http://${server.hostname}:${server.port}`)}`)
