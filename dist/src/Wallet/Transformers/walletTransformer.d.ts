import { Transformer } from '@libs/core/transformers';
export declare class WalletTransformer extends Transformer {
    transform(wallet: Record<string, any>): Promise<Record<string, any> | null>;
}
