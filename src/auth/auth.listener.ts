import { Injectable } from '@nestjs/common';
import { UserService } from '../user/services/user.service';

@Injectable()
export class Listener {
  constructor(
    private users: UserService,
  ) {}
  /**
   * Search For one User
   * @param inputs
   */
  async usersSearchFirst(
    inputs: Record<string, any>,
    error = true,
  ): Promise<any> {
    return this.users.get(inputs, error);
  }

  /**
   * Create New User
   * @param inputs
   */
  async createUser(inputs: Record<string, any>): Promise<any> {
    return await this.users.createConsumer(inputs);
  }
}
