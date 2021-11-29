import {
  ExecutionContext,
  Injectable,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { container as usercontainer } from '@app/user/container';

@Injectable()
export class RoleBasedAuthenticated extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
  ) {
    super();
  }
  private context_!: ExecutionContext;
  private grant!: boolean;
  canActivate(context: ExecutionContext) {
    this.context_ = context;
    return super.canActivate(context);
  }

  handleRequest(err:any, user:any, info:any) {
    const roles = this.reflector.get<string[]>(
      'roles',
      this.context_.getHandler(),
    );

    if (err || !user) throw err || new UnauthorizedException();

    const userRole = user.role.name.toString();

    roles.find(e => {
      if (e == userRole) this.grant = true;
    });

    if (this.grant) {
      return user;
    } else {
      throw err || new UnauthorizedException();
    }
  }
}
