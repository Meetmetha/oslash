import * as m from 'mongoose';
import { schema } from './schema';
import { relations, queryHelpers } from '@app/auth/models/plugins';

const Schema = new m.Schema(schema, {
  timestamps: true,
});

Schema.plugin(queryHelpers);
Schema.plugin(relations);

export default Schema;
