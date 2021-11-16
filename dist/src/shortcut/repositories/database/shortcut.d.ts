import { ShortcutRepository as Contract } from '../contracts';
import { DatabaseRepository } from '@libs/core';
export declare class ShortcutRepository extends DatabaseRepository implements Contract {
    model: any;
    search(inputs: Record<string, any>): Promise<Record<string, any>>;
}
