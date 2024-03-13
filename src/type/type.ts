export type Wallet = {
  publicKey: string,
  privateKey: string,
}

export type WalletList = {
  wallets: Wallet[]
  }