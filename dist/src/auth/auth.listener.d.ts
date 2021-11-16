import { UserService } from '../user/services/user.service';
export declare class Listener {
    private users;
    constructor(users: UserService);
    usersSearchFirst(inputs: Record<string, any>, error?: boolean): Promise<any>;
    createUser(inputs: Record<string, any>): Promise<any>;
}
