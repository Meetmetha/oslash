import { ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service';
declare const MustBeAuthenticated_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class MustBeAuthenticated extends MustBeAuthenticated_base {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any, info: any, context: any): any;
}
export {};
