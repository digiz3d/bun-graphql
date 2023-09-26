import { mergeResolvers } from '@graphql-tools/merge'

import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'

export default mergeResolvers([Query, Mutation, Subscription])
