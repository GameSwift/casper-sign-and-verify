import { casperProvider } from '@/lib/casper'

export const signMessage = async (message: string) => {
  try {
    if (!casperProvider) {
      throw new Error('Casper provider not found')
    }

    const isConnected = await casperProvider.requestConnection()

    if (!isConnected) {
      throw new Error('User rejected connection')
    }

    const publicKey = await casperProvider.getActivePublicKey()

    const signatureRes = await casperProvider.signMessage(message, publicKey)

    if (signatureRes.cancelled) {
      throw new Error('User rejected signature')
    }

    return Promise.resolve({ message: signatureRes.signatureHex, publicKey })
  } catch (error) {
    return Promise.reject(error)
  }
}
