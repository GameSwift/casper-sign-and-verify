const CasperWalletProvider =
  typeof window !== 'undefined' && window?.CasperWalletProvider

export const casperProvider = CasperWalletProvider && CasperWalletProvider?.()
