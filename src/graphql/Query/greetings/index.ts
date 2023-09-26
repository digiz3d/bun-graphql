import { Resolvers } from '../../types.generated'

const resolver: Resolvers = {
  Query: {
    greetings: () => {
      return 'Hello World'
    },
  },
}

export default resolver