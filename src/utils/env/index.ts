import { client } from './client.mjs'
import { server } from './server.mjs'

export * from './proxy'

export const env = {
  client,
  server
}
