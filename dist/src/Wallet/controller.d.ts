import { WalletService } from './service';
import { ApiController } from '@libs/core';
export declare class WalletController extends ApiController {
    private service;
    constructor(service: WalletService);
    getUserWallet(req: any, res: any): Promise<Record<string, any>>;
    getUserWalletTransactions(req: any, res: any): Promise<Record<string, any>>;
    redeemAiitokens(req: any, res: any): Promise<Record<string, any>>;
}
