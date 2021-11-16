import { providerMap } from '../provider.map';
import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  ShortcutRepository,
} from '../repositories/contracts';
import { get } from 'lodash';
import { addShortcut } from '../Validator/addShortcut';
import { removeShortcut } from '../Validator/removeShortcut';
import { BaseValidator } from '@libs/core/validator';
import { ValidationFailed } from '@libs/core/exceptions'
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class ShortcutService {
  constructor(
    private validator: BaseValidator,

    @Inject(providerMap.SHORTCUT_REPO)
    private Shortcuts: ShortcutRepository,
  ) {}

  async getUserShortcut(user: Record<string, any>, inputs: Record<string, any>): Promise<Record<string, any>> {
    const usershortcuts = await this.Shortcuts.getWhere({ user: user._id}, false);
    if(!usershortcuts){
      throw new BadRequestException("User haven't created any shortcuts yet");
    }
    return usershortcuts;
  }

  async addShortcut(user,inputs: Record<string, any>): Promise<any> {
    await this.validator.fire(inputs, addShortcut);
    return await this.Shortcuts.create({
      user: user._id,
      shortlink: inputs.shortlink,
      url: inputs.url,
      description: inputs.description,
      tags: inputs.tags,
    });
  }

  async removeShortcut(user,inputs: Record<string, any>): Promise<any> {
    await this.validator.fire(inputs, removeShortcut);
    const userShortcut = await this.Shortcuts.firstWhere({ user: user._id, _id: inputs.shortcutid });
    if(!userShortcut){
      throw new BadRequestException("No shortcut Exists with this ID");
    }
    const Shortcutremoval = await this.Shortcuts.deleteWhere({_id: inputs.shortcutid});
    return Shortcutremoval
  }
}
