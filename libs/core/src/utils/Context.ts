import { Request } from '../http';

export class Context {
    req: Request | undefined;

    setRequest(req: Request): this {
        this.req = req;
        return this;
    }

    getRequest(req: Request): this {
        this.req = req;
        return this;
    }
}
