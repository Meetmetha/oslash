import { Controller, Req, Res, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiController } from '@libs/core/controllers';
import { DetailTransformer } from '@app/user/Transformers';
import { MustBeAuthenticated } from './guards';

@Controller('')
export class AuthController extends ApiController {
  constructor(private auth: AuthService) {
    super();
  }

  @Post('/login')
  async login(@Req() req: any, @Res() res: any): Promise<any> {
    const user = await this.auth.consumerLogin(req.all());
    return res.success(
      await this.transform(user, new DetailTransformer(), { req }),
    );
  }

  @Post('/register')
  async register(@Req() req: any, @Res() res: any): Promise<any> {
    const user = await this.auth.consumerRegistration(req.all());
    return res.success(
      await this.transform(user, new DetailTransformer(), { req }),
    );
  }

  @UseGuards(MustBeAuthenticated)
  @Post('/change-password')
  async changePassword(@Req() req: any, @Res() res: any): Promise<any> {
    await this.auth.changePassword(req.user, req.all());
    return res.noContent();
  }
}
