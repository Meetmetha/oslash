import { RepositoryContract } from '@libs/core';
export interface ShortcutRepository extends RepositoryContract {
    search(inputs: Record<string, any>): Promise<Record<string, any>>;
}
