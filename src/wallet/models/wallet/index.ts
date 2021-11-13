import * as m from 'mongoose';
import { schema } from './schema';
import { relations } from '@app/wallet/models/plugins';

const Schema = new m.Schema(schema, {
  timestamps: true,
});

Schema.plugin(relations);

export default Schema;
