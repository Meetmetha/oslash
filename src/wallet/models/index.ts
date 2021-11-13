import WalletSchema from './wallet';
import TransactionSchema from './transaction';

const models = [
  { name: 'Wallet', schema: WalletSchema },
  { name: 'Transaction', schema: TransactionSchema },
];

export const getModels = function(): any {
  return models;
};
