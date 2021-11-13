import * as m from 'mongoose';
import { schema } from './schema';
import { relations, queryHelpers } from '@app/user/models/plugins';

const Schema = new m.Schema(schema, {
  timestamps: true,
});

Schema.plugin(relations);
Schema.plugin(queryHelpers);

Schema.virtual('name').get(function() {
  return this.firstName + ' ' + this.lastName;
});


Schema.virtual('wallet', {
  ref: 'Wallet',
  localField: '_id',
  foreignField: 'user',
  justOne: true,
});

export default Schema;
