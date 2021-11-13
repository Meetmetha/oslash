import * as m from 'mongoose';

export const schema = {
  wallet: {
    type: m.Schema.Types.ObjectId,
    ref: 'Wallet',
    index: true,
  },
  amount: {
    type: Number,
    default: null,
  },
  isCredit: {
    type: Boolean,
    default: false,
  },
  meta: {
    event: String,
    device: String,
  },
};
