export {}

declare global {
  interface Window {
    CasperWalletProvider: () => {
      requestConnection: () => Promise<boolean>
      getActivePublicKey: () => Promise<string>
      signMessage: (
        message: string,
        publicKey: string
      ) => Promise<SignatureResponse>
    }
  }
}

type SignatureResponse =
  | {
      cancelled: true
    }
  | {
      cancelled: false
      signatureHex: string
      signature: Uint8Array
    }
