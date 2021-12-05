import { Injectable } from '@nestjs/common';
import { UserService } from './services/user.service';

@Injectable()
export class UserListener {
  constructor(
    private service: UserService
  ) {}

  /**
   * Search A User
   * @param inputs
   */
  async fetchOne(inputs: Record<string, any>): Promise<Record<string, any>> {
    return await this.service.get(inputs, false);
  }

  /**
   * Search All matching users (can be multiple)
   * @param inputs
   */
  async getWhere(inputs: Record<string, any>): Promise<Record<string, any>[]> {
    return await this.service.getWhere(inputs);
  }
}
