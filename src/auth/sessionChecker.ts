import { UnauthorizedException, NestMiddleware, Injectable, Inject, forwardRef } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenRepository } from '@app/auth/repositories/contracts';
import { container } from '@app/auth/container';
import { AuthService} from './auth.service';

@Injectable()
export class SessionChecker implements NestMiddleware {
  constructor(@Inject(container.TOKEN_REPOSITORY) private tokens: TokenRepository) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;
    const jwt = header.replace('Bearer','').trim();
    const sessionBlacklist = await this.tokens.getWhere({ token: jwt }, false);
    // const sessionBlacklist = await this.authService.checkSessionblacklist(jwt);
    if(sessionBlacklist.length >= 1){
      throw new UnauthorizedException();
    }
     else {
      next();
    }
  }
}