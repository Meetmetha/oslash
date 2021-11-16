import { ShortcutService } from '../services/service';
import { ApiController } from '@libs/core';
import { BaseValidator } from '@libs/core/validator';
export declare class ShortcutController extends ApiController {
    private service;
    private validator;
    constructor(service: ShortcutService, validator: BaseValidator);
    getUserShortcut(req: any, res: any): Promise<Record<string, any>>;
    createShortcut(req: any, res: any): Promise<Record<string, any>>;
    debitfromShortcut(req: any, res: any): Promise<Record<string, any>>;
}
