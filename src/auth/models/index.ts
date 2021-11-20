import TokenSchema from './token';

const models = [
  { name: 'Token', schema: TokenSchema },
];

export const getModels = function(): any {
  return models;
};
