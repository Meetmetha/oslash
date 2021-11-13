import { Transformer } from '@libs/core';

export class WalletTransformer extends Transformer {
  availableIncludes = [];
  defaultIncludes = [];

  async transform(
    wallet: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return {
      walletId: wallet._id,
      balance: wallet.balance
    };
  }
}
