import { UserRepository as Contract } from '../contracts/User';
import { DatabaseRepository } from '@libs/core/db';
export declare class UserRepository extends DatabaseRepository implements Contract {
    model: any;
    search(inputs: Record<string, any>): Promise<Record<string, any>>;
}
