import { mergeResolvers } from '@graphql-tools/merge'

import sendMessage from './sendMessage'

export default mergeResolvers([sendMessage])
