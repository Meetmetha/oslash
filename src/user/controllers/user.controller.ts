import { MustBeAuthenticated } from '@app/auth/guards';
import { ApiController } from '@libs/core/controllers';
import { UserService } from '@app/user/services/user.service';
import {
  DetailTransformer
} from '@app/user/Transformers';
import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

@Controller('')
export class UserController extends ApiController {
  constructor(private users: UserService) {
    super();
  }
  /**
 * Not used in Oslash Task but it fetches user profile and transformer in latest Build is not fixed so you may get an Error
 */
  @Get('/profile')
  @UseGuards(MustBeAuthenticated)
  async getProfile(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    return res.success(
      await this.transform(req.user, new DetailTransformer, { req }),
    );
  }
}
