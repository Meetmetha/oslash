import { Controller, Req, Res, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiController } from '@libs/core/controllers';
import { DetailTransformer } from '../user/Transformers';
import { MustBeAuthenticated} from './guards';

@Controller('/auth')
export class AuthController extends ApiController {
  constructor(private auth: AuthService) {
    super();
  }

  @Post('/login')
  async login(@Req() req: any, @Res() res: any): Promise<any> {
    const userToken = await this.auth.consumerLogin(req.all());
    return res.success(userToken);
  }

  @Post('/register')
  async register(@Req() req: any, @Res() res: any): Promise<any> {
    const user = await this.auth.consumerRegistration(req.all());
    return res.success(`${user.id} User Created Successfully` );
  }

  @Get('/logout')
  @UseGuards(MustBeAuthenticated)
  async logout(@Req() req: any, @Res() res: any): Promise<any> {
    const user = await this.auth.consumerLogout(req.headers.authorization, req.user);
    return res.noContent();
  }
}
