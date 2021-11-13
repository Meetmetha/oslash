import { get } from 'lodash';
import * as moment from 'moment';
import { Transformer } from '@libs/core';

export class TransactionTransformer extends Transformer {
  availableIncludes = [];
  defaultIncludes = [];

  async transform(
    transaction: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return {
      id: transaction._id,
      title: get(
        `${transaction.meta.event}.purposeText`,
        'Amount Credited',
      ),
      isCredit: !!transaction.isCredit,
      amount: `+${+transaction.amount} Aii's`,
      formattedDate: moment(transaction.createdAt)
        .format('DD MMM YY')
        .toString(),
    };
  }
}
