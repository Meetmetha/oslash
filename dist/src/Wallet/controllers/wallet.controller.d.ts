import { ApiController } from '@libs/core/controllers';
import { WalletService } from '@app/Wallet/services/wallet.service';
export declare class WalletController extends ApiController {
    private wallet;
    constructor(wallet: WalletService);
    getWallet(req: any, res: any): Promise<Record<string, any>>;
    addwallet(req: any, res: any): Promise<Record<string, any>>;
    withdrawwallet(req: any, res: any): Promise<Record<string, any>>;
}
