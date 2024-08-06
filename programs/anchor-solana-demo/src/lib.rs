use anchor_lang::prelude::*;

declare_id!("GzCUhDbcKWCeESKinzkyp3rgZjcg58U6sH23WLdLvbV7");

#[program]
pub mod anchor_solana_demo {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        msg!("888");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
