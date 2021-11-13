import { BaseValidator } from '@libs/core/validator';
import { UserRepository } from '@app/user/repositories/contracts/User';
import { WalletService } from '@app/wallet/services/service';
export declare class UserService {
    private validator;
    private service;
    private users;
    constructor(validator: BaseValidator, service: WalletService, users: UserRepository);
    get(inputs: Record<string, any>, error?: boolean): Promise<Record<string, any>>;
    createConsumer(inputs: Record<string, any>): Promise<Record<string, any>>;
    changePassword(user: any, inputs: Record<string, any>): Promise<Record<string, any>>;
    updateProfile(user: any, inputs: Record<string, any>): Promise<Record<string, any>>;
    deleteProfile(user: any, inputs: Record<string, any>): Promise<any>;
    update(condition: Record<string, any>, inputs: Record<string, any>): Promise<any>;
    getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]>;
}
