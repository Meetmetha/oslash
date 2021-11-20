import * as m from 'mongoose';

export const schema = {
  user: {
    type: m.Schema.Types.ObjectId,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
    index: true,
  }
};
