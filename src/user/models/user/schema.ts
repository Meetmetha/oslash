import * as m from 'mongoose';

export const schema = {
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, default: null, lowercase: true, index: true },
  password: { type: String, default: null, },
  username: { type: String, default: null }
};
