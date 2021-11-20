import { RepositoryContract } from '@libs/core';

export interface TokenRepository extends RepositoryContract {
    search(inputs: Record<string, any>): Promise<Record<string, any>>;
  }
  
