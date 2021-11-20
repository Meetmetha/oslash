import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenRepository } from '@app/auth/repositories/contracts';
export declare class SessionChecker implements NestMiddleware {
    private tokens;
    constructor(tokens: TokenRepository);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
