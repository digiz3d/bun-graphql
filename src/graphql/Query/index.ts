import { mergeResolvers } from '@graphql-tools/merge'

import greetings from './greetings'

export default mergeResolvers([greetings])
