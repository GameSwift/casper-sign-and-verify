'use client'

import { useMutation } from '@tanstack/react-query'
import { Field, Form } from 'houseform'
import { Button, Input, LoaderCircle, StatusMessage } from '@/components'
import { QueryKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils'
import { signMessage } from '../utils'
import {
  SignAndVerifySchema,
  signAndVerifyFormMessageSchema
} from '../validationSchemas'

export const SignAndVerifyMessageForm = () => {
  const { isLoading, mutate, error, data, variables } = useMutation(
    [QueryKey.test],
    signMessage
  )
  const errorMessage = error ? getErrorMessage(error) : undefined

  return (
    <>
      <Form<SignAndVerifySchema> onSubmit={({ message }) => mutate(message)}>
        {({ submit, isSubmitted }) => (
          <form
            onSubmit={e => {
              e.preventDefault()
              submit()
            }}
            className="flex w-full max-w-xs flex-col gap-4 text-left max-md:max-w-none"
          >
            <Field<SignAndVerifySchema['message']>
              name="message"
              initialValue="GameSwift x Casper Wallet"
              onBlurValidate={signAndVerifyFormMessageSchema}
              onChangeValidate={
                isSubmitted ? signAndVerifyFormMessageSchema : undefined
              }
            >
              {({ value, setValue, onBlur, errors }) => (
                <Input
                  id="message"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  onBlur={onBlur}
                  placeholder="Your message..."
                  disabled={isLoading}
                  label="Message"
                  errorMessage={errors}
                />
              )}
            </Field>
            <Button
              disabled={isLoading}
              type="submit"
            >
              {isLoading && <LoaderCircle />}Sign
            </Button>
            {errorMessage && (
              <StatusMessage variant="error">{errorMessage}</StatusMessage>
            )}
          </form>
        )}
      </Form>
      {data && (
        <div className="flex flex-col gap-4 text-left">
          <div>
            <h3 className="font-main text-xl">Message:</h3>
            <p className="text-gray">{variables}</p>
          </div>
          <div>
            <h3 className="font-main text-xl">Public key:</h3>
            <p className="break-all text-gray">{data.publicKey}</p>
          </div>
          <div>
            <h3 className="font-main text-xl">Signature:</h3>
            <p className="break-all text-gray">{data.message}</p>
          </div>
        </div>
      )}
    </>
  )
}
