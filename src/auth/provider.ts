import { AuthService } from './auth.service';
import { Listener } from './auth.listener';
import { JwtStrategy } from './strategies/jwt';

const providers = [
  AuthService,
  Listener,
  JwtStrategy
];

const getProviders = function(): any {
  return providers;
};

export { getProviders };
