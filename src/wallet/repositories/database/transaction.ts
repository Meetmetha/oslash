import { TransactionRepository as Contract } from '../contracts';
import { DatabaseRepository } from '@libs/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { get } from 'lodash';

@Injectable()
export class TransactionRepository extends DatabaseRepository implements Contract {
  @InjectModel('Transaction')
  model: any;

  async search(inputs: Record<string, any>): Promise<Record<string, any>> {
    const query = this.query();

    if (inputs.wallet) {
      query.where('wallet').equals(inputs.wallet);
    }

    query.sort({ createdAt: -1 });
  
    return get(inputs, 'paginate', true)
      ? await query.paginate(inputs.page, inputs.per_page)
      : await query;
  }
}
