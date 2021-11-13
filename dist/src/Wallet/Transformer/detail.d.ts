import { Transformer } from '@libs/core';
export declare class WalletTransformer extends Transformer {
    availableIncludes: any[];
    defaultIncludes: any[];
    transform(wallet: Record<string, any>): Promise<Record<string, any> | null>;
}
