import { ApiController } from '@libs/core/controllers';
import { UserService } from '@app/user/services/user.service';
export declare class UserController extends ApiController {
    private users;
    constructor(users: UserService);
    getProfile(req: any, res: any): Promise<Record<string, any>>;
    deleteProfile(req: any, res: any): Promise<Record<string, any>>;
    updateProfile(req: any, res: any): Promise<Record<string, any>>;
}
