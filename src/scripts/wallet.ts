import * as solana from "@solana/web3.js";
import bs58 from 'bs58';
import { DataBase } from "../db";
import { Wallet, WalletList } from "../type/type";

interface IWalletArgs {
  create?: boolean,
  number?: number,
  all?: boolean,
  balance?: boolean,
  symbol?: string
  usdt: boolean
}

export const runWallet = async (args: IWalletArgs) => {
  // create a wallet by default
  if (args.create && !args.number) {
    try {
      let keypair = solana.Keypair.generate();
      let publicKey = keypair.publicKey.toBase58()
      let privateKey = bs58.encode(keypair.secretKey)
      let newWallet: Wallet = {publicKey, privateKey}
      await DataBase.wallet.push(
        `${publicKey}`,
        {
          publicKey: publicKey,
          privateKey: privateKey
        },
        false
      )
      console.log(newWallet)
    }
    catch(error: any) {
      console.error(error)
    }
  }

  // create wallets with number
  if (args.create && args.number) {
    let walletList: WalletList = { wallets: []} 
    try {
      for (let count = 0; count < args.number; count++) {
        let keypair = solana.Keypair.generate();
        let publicKey = keypair.publicKey.toBase58()
        let privateKey = bs58.encode(keypair.secretKey)
        let newWallet: Wallet = {publicKey, privateKey}
        walletList.wallets.push(newWallet)
        console.log(walletList)
      }
      await DataBase.wallet.push(
        `${walletList}`,
        {
          walletList: walletList,
        },
        false
      )
    }
    catch(error: any) {
      console.error(error)
    }
  }
}