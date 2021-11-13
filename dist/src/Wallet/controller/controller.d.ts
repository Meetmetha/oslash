import { WalletService } from '../services/service';
import { ApiController } from '@libs/core';
export declare class WalletController extends ApiController {
    private service;
    constructor(service: WalletService);
    createWallet(req: any, res: any): Promise<Record<string, any>>;
    getUserWallet(req: any, res: any): Promise<Record<string, any>>;
    credittowallet(req: any, res: any): Promise<Record<string, any>>;
    debitfromwallet(req: any, res: any): Promise<Record<string, any>>;
}
