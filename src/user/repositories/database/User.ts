import { UserRepository as Contract } from '../contracts/User';
import { DatabaseRepository } from '@libs/core/db';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as m from 'mongoose';
import { cast } from '@libs/core/helpers';
import { get } from 'lodash';

@Injectable()
export class UserRepository extends DatabaseRepository implements Contract {
  @InjectModel('User')
  model: any;

  async search(inputs: Record<string, any>): Promise<Record<string, any>> {
    const query = this.query();
    if (inputs._id) {
      inputs._id = cast(inputs._id, m.Types.ObjectId);
      query.find(inputs);
    }

    if (inputs._ids) {
      query.find({ _id: inputs._ids });
    }

    if (inputs.q) {
      query.find({
        email: { $regex: inputs.q, $options: 'i' },
      });
    }

    if (inputs.sort) {
      query.sort({ createdAt: -1 });
    }

    if (inputs.where) {
      query.find(inputs.where);
    }

    return get(inputs, 'paginate', true)
      ? await query.paginate(inputs.page, inputs.per_page)
      : await query;
  }
}
