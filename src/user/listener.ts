import { Injectable } from '@nestjs/common';
import { UserService } from './services/user.service';

@Injectable()
export class UserListener {
  constructor(
    private service: UserService
  ) {}

  async fetchOne(inputs: Record<string, any>): Promise<Record<string, any>> {
    return await this.service.get(inputs, false);
  }

  async changePassword(
    user: Record<string, any>,
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    return await this.service.changePassword(user, inputs);
  }

  async getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]> {
    return await this.service.getWhere(inputs);
  }
}
