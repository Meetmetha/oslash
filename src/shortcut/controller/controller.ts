import { ShortcutService } from '../services/service';
import {
  ShortcutTransformer,
} from '@app/shortcut/Transformer';
import { Controller, Get, Res, Req, UseGuards, Post, Delete } from '@nestjs/common';
import { ApiController } from '@libs/core';
import { MustBeAuthenticated } from '@app/auth/guards';
import { addShortcut, removeShortcut } from '../Validator'
import { BaseValidator } from '@libs/core/validator';

@Controller('/shortcut')
@UseGuards(MustBeAuthenticated)
export class ShortcutController extends ApiController {
  constructor(private service: ShortcutService, private validator: BaseValidator) {
    super();
  }

  @Get('')
  async getUserShortcut(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const Shortcut = await this.service.getUserShortcut(req.user, req.all());
    return res.success(Shortcut);
  }

  @Post('/create')
  async createShortcut(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const Shortcut = await this.service.addShortcut(req.user, req.all());
    return res.success("Shortcut Created");
  }

  @Post('/delete')
  async debitfromShortcut(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const Shortcutdebit = await this.service.removeShortcut(req.user, req.all());
    return res.success({
      result:
        'Your Shortcut is Removed',
    });
  }
}
