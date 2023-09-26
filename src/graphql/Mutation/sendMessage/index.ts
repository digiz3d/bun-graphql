import { NewMessageTrigger } from '../../../pubsub/newMessage'
import { Resolvers } from '../../types.generated'

const resolver: Resolvers = {
  Mutation: {
    sendMessage: (_, { input }, { pubsub }) => {
      pubsub.publish(NewMessageTrigger, { txt: input.text })
      return { ok: true }
    },
  },
}

export default resolver
