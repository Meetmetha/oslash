import { pick, get } from 'lodash';
import { container } from '@app/user/container';
import {
  Injectable,
  Inject
} from '@nestjs/common';
import { BaseValidator } from '@libs/core/validator';
import { UserRepository } from '@app/user/repositories/contracts/User';
import {
  CreateUser,
  UpdateProfile,
  DeleteProfile
} from '../validator';
import { Hash } from '@app/auth/utils';
import { ValidationFailed } from '@libs/core/exceptions';
import { WalletService } from '@app/wallet/services/service'

@Injectable()
export class UserService {
  constructor(
    private validator: BaseValidator,
    private service: WalletService, //Convert it to Listerner 
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
    console.log(user)
    const wallet = await this.service.createWallet(user._id);    
    return user;
  }

  async changePassword(
    user,
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    const newpass =['password']
    await this.users.update(user, pick(inputs, newpass));
    return await this.users.refresh(user);
  }

  async updateProfile(
    user,
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    await this.validator.fire(inputs, UpdateProfile);
    const selectedInputs = [
      'username'
    ];
    await this.users.update(user, pick(inputs, selectedInputs));

    return await this.users.refresh(user);
  }

  async deleteProfile(
    user,
    inputs: Record<string, any>,
  ): Promise<any> {
    await this.validator.fire(inputs, DeleteProfile);
    if (!(await Hash.match(inputs.password, user.password))) {
      throw new ValidationFailed({
        password: ['Wrong password entered.'],
      });
    }
    return await this.users.delete(user);
  }

  async update(
    condition: Record<string, any>,
    inputs: Record<string, any>,
  ): Promise<any> {
    await this.users.updateWhere(condition, inputs);
  }

  async getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]> {
    return await this.users.getWhere(inputs);
  }
}
