import { Injectable } from '@nestjs/common';
import { UserService } from '../user/services/user.service';

@Injectable()
export class Listener {
  constructor(
    private users: UserService,
  ) {}

  async usersSearchFirst(
    inputs: Record<string, any>,
    error = true,
  ): Promise<any> {
    return this.users.get(inputs, error);
  }

  async createUser(inputs: Record<string, any>): Promise<any> {
    return await this.users.createConsumer(inputs);
  }
}
