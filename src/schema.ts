import { createSchema } from 'graphql-yoga'

import resolvers from './graphql/resolvers'

const schema = createSchema({
  typeDefs: await Bun.file('src/graphql/typeDefs.generated.graphql').text(),
  resolvers,
})

export default schema
