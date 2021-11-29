import {
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class MustBeAuthenticated extends AuthGuard('jwt') {
  constructor(
    private readonly authService : AuthService 
  ) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return super.canActivate(context);
  }

  handleRequest(err:any, user:any, info:any, context:any) {
    const request = context.switchToHttp().getRequest();
    const header = request.headers.authorization;
    const jwt = header.replace('Bearer','').trim();
    // const sessionCheck = this.authService.checkSessionblacklist(jwt);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}