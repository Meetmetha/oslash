import * as m from 'mongoose';

export const schema = {
  user: {
    type: m.Schema.Types.ObjectId,
    ref: 'User',
  },
  shortlink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: null,
  }
};
