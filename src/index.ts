import { program } from 'commander';
import { runWallet } from './scripts/wallet';

export const main = () => {
  program
  .command("wallet")
  .description("wallet options")
  .option("-c, --create", "Create a new wallet ")

  .action(async (args) => {
      runWallet(args)
  })
}

export default {main}