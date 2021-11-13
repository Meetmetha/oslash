import { WalletService } from './services/wallet.service';
export declare class WalletListener {
    private service;
    constructor(service: WalletService);
    fetchOne(inputs: Record<string, any>): Promise<Record<string, any>>;
    getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]>;
}
