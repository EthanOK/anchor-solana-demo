use std::mem::size_of;

use anchor_lang::prelude::*;

declare_id!("GzCUhDbcKWCeESKinzkyp3rgZjcg58U6sH23WLdLvbV7");

#[program]
pub mod anchor_solana_demo {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        ctx.accounts.my_storage.x += 1;
        msg!("MyStorage.x: {}", ctx.accounts.my_storage.x);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init,
              payer = signer,
              space=size_of::<MyStorage>() + 8,
              seeds = [],
              bump)]
    pub my_storage: Account<'info, MyStorage>,

    #[account(mut)]
    pub signer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
pub struct MyStorage {
    x: u64,
}
