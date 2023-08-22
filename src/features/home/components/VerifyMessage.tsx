import { CLPublicKey, verifyMessageSignature } from 'casper-js-sdk'
import { useState } from 'react'
import { Button } from '@/components'
import { Undefinedable } from '@/types'

type VerifyMessageProps = {
  publicKey: string
  message: string
  signature: Uint8Array
  signatureHex: string
}

export const VerifyMessage: React.FC<VerifyMessageProps> = ({
  message,
  publicKey,
  signature,
  signatureHex
}) => {
  const [isValid, setIsValid] = useState<Undefinedable<boolean>>(undefined)
  const onVerify = () => {
    const isValid = verifyMessageSignature(
      CLPublicKey.fromHex(publicKey),
      message,
      signature
    )

    setIsValid(isValid)
  }

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={onVerify}
        className="max-w-xs max-md:max-w-none"
        disabled={isValid !== undefined}
      >
        Verify
      </Button>
      {isValid && (
        <p className="text-success-500">
          Signature is <strong>valid</strong>
        </p>
      )}
      {isValid === false && (
        <p className="text-error-500">
          Signature is <strong>invalid</strong>
        </p>
      )}
      {isValid !== undefined && (
        <p className="text-gray">
          Signature verified for <strong>{message}</strong> message, signed by{' '}
          <strong className="break-all">{publicKey}</strong> public key, with{' '}
          <strong className="break-all">{signatureHex}</strong> signature.
        </p>
      )}
    </div>
  )
}
