import { AnchorProvider, Idl, Program, Wallet, web3 } from "@coral-xyz/anchor";
import idl from "../target/idl/anchor_solana_demo.json";

// solana-test-validator
// solana logs
const connection = new web3.Connection("http://127.0.0.1:8899", "confirmed");
const keypair = web3.Keypair.generate();
const provider = new AnchorProvider(connection, new Wallet(keypair));
const program = new Program(idl as Idl, provider);
async function main() {
  await airdrop(keypair.publicKey);

  const tx = await program.methods.initialize().signers([keypair]).rpc();
  console.log("Your transaction signature", tx);

  // const storageData = await program.account.myStorage.fetch();
  // console.log("storageData:", storageData);
}
main();

async function airdrop(address: web3.PublicKey) {
  const tx = await provider.connection.requestAirdrop(address, 1000000000);
  await provider.connection.confirmTransaction(tx);

  console.log(
    "sol balance:",
    await provider.connection.getBalance(keypair.publicKey)
  );
}
