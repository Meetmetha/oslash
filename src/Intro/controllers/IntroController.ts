import { ApiController, Request, Response } from '../../../libs/core/src';
import { Controller, Get, Req, Res, UseGuards, Post, Patch} from '@nestjs/common';
//import { MustBeAuthenticated } from '../guards'

@Controller('')
export class IntroController extends ApiController {

  @Get('')
  myintro(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Hey! This is Mitesh Metha building Oslash backend! Details here: https://github.com/Meetmetha/oslash")
  }    

  @Get('/login')
  loginget(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Login is a POST Request follow guide here: https://github.com/Meetmetha/oslash")
  } 
  @Get('/register')
  registerget(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Register is a POST Request follow guide here: https://github.com/Meetmetha/oslash")
  } 
}