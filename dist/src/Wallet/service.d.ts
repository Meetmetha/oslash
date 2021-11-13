import { TransactionRepository, WalletRepository } from './repositories/contracts';
export declare class WalletService {
    private transactions;
    private wallets;
    constructor(transactions: TransactionRepository, wallets: WalletRepository);
    getUserWallet(user: Record<string, any>): Promise<Record<string, any>>;
    createWallet(user: Record<string, any>, options?: Record<string, any>): Promise<Record<string, any>>;
    creditTokens(inputs: Record<string, any>): Promise<any>;
    getUserWalletTransactions(user: Record<string, any>, inputs: Record<string, any>): Promise<Record<string, any>>;
}
