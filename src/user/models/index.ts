import UserSchema from './user';

const models = [
  { name: 'User', schema: UserSchema }
];

export const getModels = function(): any {
  return models;
};
