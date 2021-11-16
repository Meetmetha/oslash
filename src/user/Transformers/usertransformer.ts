import { Transformer } from '@libs/core/transformers';
import { get, capitalize, startCase, toLower } from 'lodash';

export class DetailTransformer extends Transformer {
  defaultIncludes = [];

  async transform(
    user: Record<string, any>,
  ): Promise<Record<string, any> | null> {
    return {
      id: user.id,
      firstName: startCase(toLower(user.firstName)),
      lastName: capitalize(user.lastName),
      email: user.email,
      token: user.token,
      username: user.username
    };
  }
}