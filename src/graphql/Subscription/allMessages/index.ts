import { NewMessagePayload, NewMessageTrigger } from '../../../pubsub/newMessage'
import { Resolvers } from '../../types.generated'

const resolvers: Resolvers = {
  Subscription: {
    allMessages: {
      subscribe: (parent, args, { pubsub }) => {
        return pubsub.asyncIterator(NewMessageTrigger) as any
      },
      resolve: (payload: NewMessagePayload) => {
        return payload.txt
      },
    },
  },
}

export default resolvers
