import { RepositoryContract } from '@libs/core/db';

export interface UserRepository extends RepositoryContract {
  search(inputs: Record<string, any>): Promise<Record<string, any>>;
}
