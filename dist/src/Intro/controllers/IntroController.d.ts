import { ApiController, Request, Response } from '@libs/core';
export declare class IntroController extends ApiController {
    myintro(req: Request, res: Response): Promise<Response>;
    loginget(req: Request, res: Response): Promise<Response>;
    registerget(req: Request, res: Response): Promise<Response>;
}
