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
  Put,
  Delete,
  Post
} from '@nestjs/common';

@Controller('')
export class UserController extends ApiController {
  constructor(private users: UserService) {
    super();
  }

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

  @Post('/delete-profile')
  @UseGuards(MustBeAuthenticated)
  async deleteProfile(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const user = await this.users.deleteProfile(req.user, req.all());
    return res.success('Account Deleted! Thanks for testing reach me here https://miteshmetha.com');
  }

  @Put('/profile')
  @UseGuards(MustBeAuthenticated)
  async updateProfile(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const user = await this.users.updateProfile(req.user, req.all());
    return res.success(
      await this.transform(user, new DetailTransformer, { req }),
    );
  }
}
