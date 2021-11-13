import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const RoleBasedAuthenticated_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class RoleBasedAuthenticated extends RoleBasedAuthenticated_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    private context_;
    private grant;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
