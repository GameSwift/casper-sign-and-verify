import { z } from 'zod'

export const signAndVerifySchema = z.object({
  message: z.string().nonempty('Message is required')
})

export const signAndVerifyFormMessageSchema = signAndVerifySchema.shape.message

export type SignAndVerifySchema = z.infer<typeof signAndVerifySchema>
