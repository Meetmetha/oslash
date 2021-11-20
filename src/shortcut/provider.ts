import { ShortcutService } from './services/service';
import { AuthService } from '@app/auth/auth.service';
import { providerMap } from './provider.map';
import {
  ShortcutRepository,
} from './repositories/database';

const providers = [
  {
    provide: providerMap.SHORTCUT_REPO,
    useClass: ShortcutRepository,
  },
  ShortcutService,
];

const getProviders = function(): any {
  return providers;
};

export { getProviders };
