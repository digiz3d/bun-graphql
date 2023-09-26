import { createYoga } from 'graphql-yoga'
import { makeHandler } from 'graphql-ws/lib/use/bun'
import { PubSub } from 'graphql-subscriptions'

import schema from './schema'

const pubsub = new PubSub()

const yoga = createYoga({
  schema,
  context: { pubsub },
  graphiql: { subscriptionsProtocol: 'WS' },
  graphqlEndpoint: '/graphql',
  healthCheckEndpoint: '/healthz',
  cors: { origin: '*' },
})

const server = Bun.serve({
  fetch: yoga,
  websocket: makeHandler({ schema }),
})

console.info(`Server is running on ${new URL('/graphql', `http://${server.hostname}:${server.port}`)}`)
