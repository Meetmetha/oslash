import { container } from './container';
import { AuthService } from './auth.service';
import { Listener } from './auth.listener';
import { JwtStrategy } from './strategies/jwt';
import {
  TokenRepository,
} from './repositories/database';
import { SessionChecker } from './sessionChecker';

const providers = [
  AuthService,
  Listener,
  SessionChecker,
  JwtStrategy,
  {
    provide: container.TOKEN_REPOSITORY,
    useClass: TokenRepository,
  },
];

const getProviders = function(): any {
  return providers;
};

export { getProviders };
