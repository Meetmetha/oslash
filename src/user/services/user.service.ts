import { container } from '../../user/container';
import {
  Injectable,
  Inject
} from '@nestjs/common';
import { BaseValidator } from '@libs/core/validator';
import { UserRepository } from '@app/user/repositories/contracts/User';
import {
  CreateUser
} from '../validator';
import { ShortcutService } from '@app/shortcut/services/service'

@Injectable()
export class UserService {
  constructor(
    private validator: BaseValidator,
    private service: ShortcutService, //Convert it to Listerner 
    @Inject(container.USER_REPOSITORY) private users: UserRepository,
  ) {}

  async get(
    inputs: Record<string, any>,
    error = true,
  ): Promise<Record<string, any>> {
    return await this.users.firstWhere(inputs, error);
  }

  async createConsumer(
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    await this.validator.fire(inputs, CreateUser);
    const user = await this.users.create(inputs); 
    return user;
  }

  async getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]> {
    return await this.users.getWhere(inputs);
  }
}
