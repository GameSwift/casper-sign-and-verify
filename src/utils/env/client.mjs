import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const client = createEnv({
  client: {
    NEXT_PUBLIC_IS_PRODUCTION: z.string(),
    NEXT_PUBLIC_APP_BASE_URL: z.string().url()
  },
  runtimeEnv: {
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NEXT_PUBLIC_IS_PRODUCTION,
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL
  }
})
