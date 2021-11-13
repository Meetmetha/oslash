import { Transformer } from '@libs/core/transformers';
export declare class DetailTransformer extends Transformer {
    availableIncludes: string[];
    defaultIncludes: any[];
    transform(user: Record<string, any>): Promise<Record<string, any> | null>;
    includeWallet(user: Record<string, any>): Promise<Record<string, any>>;
}
