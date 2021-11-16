import { BaseValidator } from '@libs/core/validator';
import { UserRepository } from '@app/user/repositories/contracts/User';
import { ShortcutService } from '@app/shortcut/services/service';
export declare class UserService {
    private validator;
    private service;
    private users;
    constructor(validator: BaseValidator, service: ShortcutService, users: UserRepository);
    get(inputs: Record<string, any>, error?: boolean): Promise<Record<string, any>>;
    createConsumer(inputs: Record<string, any>): Promise<Record<string, any>>;
    getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]>;
}
