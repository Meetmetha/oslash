import { Transformer } from '@libs/core/transformers';
export declare class DetailTransformer extends Transformer {
    defaultIncludes: never[];
    transform(user: Record<string, any>): Promise<Record<string, any> | null>;
}
