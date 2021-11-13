import { providerMap } from '../provider.map';
import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  TransactionRepository,
  WalletRepository,
} from '../repositories/contracts';
import { get } from 'lodash';
import { addCredit, removeCredit } from '@app/wallet/Validator'
import { BaseValidator } from '@libs/core/validator';
import { ValidationFailed } from '@libs/core/exceptions'
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class WalletService {
  constructor(
    private validator: BaseValidator,
    @Inject(providerMap.TRANSACTION_REPO)
    private transactions: TransactionRepository,

    @Inject(providerMap.WALLET_REPO)
    private wallets: WalletRepository,
  ) {}

  async getUserWallet(user: Record<string, any>): Promise<Record<string, any>> {
    return await this.wallets.firstWhere({ user: user._id });
  }

  async createWallet(
    user: Record<string, any>,
    options?: Record<string, any>,
  ): Promise<Record<string, any>> {
    const wallet = await this.wallets.firstWhere({ user: user._id }, false);

    if (wallet) {
      return wallet;
    }

    const balance = get(options || {}, 'balance', 0);
    return await this.wallets.create({
      user: user._id,
      balance,
    });
  }

  async creditWallet(user,inputs: Record<string, any>): Promise<any> {
    await this.validator.fire(inputs, addCredit);
    const userwallet = await this.wallets.firstWhere({ user: user._id });
    const walletcredit = await this.wallets.update(userwallet, {balance: +userwallet.balance + inputs.balance});
    return walletcredit
  }

  async debitWallet(user,inputs: Record<string, any>): Promise<any> {
    await this.validator.fire(inputs, removeCredit);
    const userwallet = await this.wallets.firstWhere({ user: user._id });
    if(userwallet.balance < inputs.balance){
      throw new BadRequestException("Insufficient Balance to Redeem please Credit")
    }
    const walletdebit = await this.wallets.update(userwallet, {balance: +userwallet.balance - inputs.balance});
    return walletdebit
  }

  async getUserWalletTransactions(
    user: Record<string, any>,
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    const wallet = await this.wallets.firstWhere({ user: user._id });
    inputs['wallet'] = wallet._id;
    return await this.transactions.search(inputs);
  }
}
