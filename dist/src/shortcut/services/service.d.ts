import { ShortcutRepository } from '../repositories/contracts';
import { BaseValidator } from '@libs/core/validator';
export declare class ShortcutService {
    private validator;
    private Shortcuts;
    constructor(validator: BaseValidator, Shortcuts: ShortcutRepository);
    getUserShortcut(user: Record<string, any>, inputs: Record<string, any>): Promise<Record<string, any>>;
    addShortcut(user: any, inputs: Record<string, any>): Promise<any>;
    removeShortcut(user: any, inputs: Record<string, any>): Promise<any>;
}
