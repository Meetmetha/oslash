import { Transformer } from '@libs/core/transformers';

export class DetailTransformer extends Transformer {
  defaultIncludes = [];

  async transform(
    user: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: user.token,
      username: user.username
    };
  }
}