import { UserService } from '@app/user/services/user.service';
export declare class Listener {
    private users;
    constructor(users: UserService);
    usersSearchFirst(inputs: Record<string, any>, error?: boolean): Promise<any>;
    createUser(inputs: Record<string, any>): Promise<any>;
    changePassword(user: any, inputs: Record<string, any>): Promise<any>;
    updateUser(conditions: Record<string, any>, inputs: Record<string, any>): Promise<any>;
}
