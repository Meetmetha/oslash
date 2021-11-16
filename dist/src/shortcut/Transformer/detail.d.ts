import { Transformer } from '@libs/core';
export declare class ShortcutTransformer extends Transformer {
    transform(Shortcut: Record<string, any>): Promise<Record<string, any> | null>;
}
