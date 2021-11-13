import { RepositoryContract } from '@libs/core';
export interface TransactionRepository extends RepositoryContract {
    search(inputs: Record<string, any>): Promise<Record<string, any>>;
}
