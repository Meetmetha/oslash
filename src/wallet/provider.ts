import { WalletService } from './services/service';
import { providerMap } from './provider.map';
import {
  TransactionRepository,
  WalletRepository,
} from './repositories/database';

const providers = [
  {
    provide: providerMap.TRANSACTION_REPO,
    useClass: TransactionRepository,
  },
  {
    provide: providerMap.WALLET_REPO,
    useClass: WalletRepository,
  },
  WalletService,
];

const getProviders = function(): any {
  return providers;
};

export { getProviders };
