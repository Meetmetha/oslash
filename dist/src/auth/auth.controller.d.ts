import { AuthService } from './auth.service';
import { ApiController } from '@libs/core/controllers';
export declare class AuthController extends ApiController {
    private auth;
    constructor(auth: AuthService);
    login(req: any, res: any): Promise<any>;
    register(req: any, res: any): Promise<any>;
    changePassword(req: any, res: any): Promise<any>;
}
