import { ShortcutRepository as Contract } from '../contracts';
import { DatabaseRepository } from '@libs/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { cast } from '@libs/core/helpers';
import * as m from 'mongoose';
import { get } from 'lodash';

@Injectable()
export class ShortcutRepository extends DatabaseRepository implements Contract {
  @InjectModel('Shortcut')
  model: any;

  async search(inputs: Record<string, any>): Promise<Record<string, any>> {
    const query = this.query();
    
    await query.where(inputs.user);

    return get(inputs, 'paginate', true)
      ? await query.paginate(inputs.page, inputs.per_page)
      : await query;
  }
}
