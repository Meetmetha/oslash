import { TransactionRepository, WalletRepository } from '../repositories/contracts';
export declare class CreditAiiToken {
    private wallets;
    private transactions;
    constructor(wallets: WalletRepository, transactions: TransactionRepository);
    handle({ wallet, options }: {
        wallet: any;
        options: any;
    }): Promise<any>;
}
