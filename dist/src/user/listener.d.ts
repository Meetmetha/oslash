import { UserService } from './services/user.service';
export declare class UserListener {
    private service;
    constructor(service: UserService);
    fetchOne(inputs: Record<string, any>): Promise<Record<string, any>>;
    getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]>;
}
