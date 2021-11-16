import { Transformer } from '@libs/core';
export declare class TransactionTransformer extends Transformer {
    availableIncludes: any[];
    defaultIncludes: any[];
    transform(transaction: Record<string, any>): Promise<Record<string, any> | null>;
}
