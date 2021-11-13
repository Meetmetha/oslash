import * as m from 'mongoose';

export const schema = {
  user: {
    type: m.Schema.Types.ObjectId,
    ref: 'User',
  },
  balance: {
    type: Number,
    default: 0.0,
  },
};
