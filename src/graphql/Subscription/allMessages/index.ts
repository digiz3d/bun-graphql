import { NewMessagePayload, NewMessageTrigger } from '../../../pubsub/newMessage'
import { Resolvers } from '../../types.generated'

const resolvers: Resolvers = {
  Subscription: {
    allMessages: {
      subscribe: (parent, args, ctx) => {
        return ctx.pubsub.asyncIterator(NewMessageTrigger) as any
      },
      resolve: (payload: NewMessagePayload) => {
        return payload.txt
      },
    },
  },
}

export default resolvers
