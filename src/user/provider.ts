import { container } from './container';
import { UserListener } from './listener';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/database';

const providers = [
  {
    provide: container.USER_REPOSITORY,
    useClass: UserRepository,
  },
  UserListener,
  UserService,
];

const getProviders = function(): any {
  return providers;
};

export { container, getProviders };
