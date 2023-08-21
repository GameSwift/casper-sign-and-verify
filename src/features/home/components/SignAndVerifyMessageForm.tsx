'use client'

import { useMutation } from '@tanstack/react-query'
import { Field, Form } from 'houseform'
import { Button, Input, LoaderCircle, StatusMessage } from '@/components'
import { QueryKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils'
import { sendMockedTest } from '../actions'
import {
  SignAndVerifySchema,
  signAndVerifyFormMessageSchema
} from '../validationSchemas'

export const SignAndVerifyMessageForm = () => {
  const { isLoading, mutate, error } = useMutation(
    [QueryKey.test],
    sendMockedTest,
    {
      onSuccess: data => {
        alert(`Mocked response: ${JSON.stringify(data, null, 2)}`)
      }
    }
  )
  const errorMessage = error ? getErrorMessage(error) : undefined

  return (
    <Form<SignAndVerifySchema>
      onSubmit={({ message }) => mutate({ userName: message })}
    >
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
            initialValue="GameSwift x Casper Network"
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
  )
}
