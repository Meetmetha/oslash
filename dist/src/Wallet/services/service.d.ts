import { TransactionRepository, WalletRepository } from '../repositories/contracts';
import { BaseValidator } from '@libs/core/validator';
export declare class WalletService {
    private validator;
    private transactions;
    private wallets;
    constructor(validator: BaseValidator, transactions: TransactionRepository, wallets: WalletRepository);
    getUserWallet(user: Record<string, any>): Promise<Record<string, any>>;
    createWallet(user: Record<string, any>, options?: Record<string, any>): Promise<Record<string, any>>;
    creditWallet(user: any, inputs: Record<string, any>): Promise<any>;
    debitWallet(user: any, inputs: Record<string, any>): Promise<any>;
    getUserWalletTransactions(user: Record<string, any>, inputs: Record<string, any>): Promise<Record<string, any>>;
}
