import { BaseValidator } from '@libs/core/validator';
import { WalletRepository } from '@app/wallet/repositories/contracts/Wallet';
export declare class WalletService {
    private validator;
    private wallet;
    constructor(validator: BaseValidator, wallet: WalletRepository);
    getbalance(inputs: Record<string, any>, error?: boolean): Promise<Record<string, any>>;
    addBalance(user: any, inputs: Record<string, any>): Promise<Record<string, any>>;
    withdrawBalance(user: any, inputs: Record<string, any>): Promise<Record<string, any>>;
    getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]>;
}
