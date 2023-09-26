import { mergeResolvers } from '@graphql-tools/merge'

import allMessages from './allMessages'

export default mergeResolvers([allMessages])
