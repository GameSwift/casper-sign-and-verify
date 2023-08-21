import { client } from './client.mjs'

export const isProduction = client.NEXT_PUBLIC_IS_PRODUCTION === 'true'
