import fg from 'fast-glob'

import { mergeTypeDefs } from '@graphql-tools/merge'
import { print } from 'graphql'

const files = await fg('src/graphql/**/typeDefs.graphql')
const typeDefs = await Promise.all(files.map((file) => Bun.file(file).text()))

const mergedSchema = mergeTypeDefs(typeDefs, { sort: true })

Bun.write('src/graphql/typeDefs.generated.graphql', print(mergedSchema))
