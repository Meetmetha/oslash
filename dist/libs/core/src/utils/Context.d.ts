import { Request } from '../http';
export declare class Context {
    req: Request | undefined;
    setRequest(req: Request): this;
    getRequest(req: Request): this;
}
