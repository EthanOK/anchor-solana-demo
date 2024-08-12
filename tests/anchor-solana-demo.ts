import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorSolanaDemo } from "../target/types/anchor_solana_demo";
import idl from "../target/idl/anchor_solana_demo.json";

// auto deploy the program on testnet
describe("anchor-solana-demo", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  // Anchor 在后台默默地部署程序
  const program = anchor.workspace
    .AnchorSolanaDemo as Program<AnchorSolanaDemo>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);

    // await program.account.myStorage.fetch();
  });
});

// 读取已部署的程序
// describe("anchor-solana-demo", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = new Program(idl as anchor.Idl, anchor.getProvider());

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });
