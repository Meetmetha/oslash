import { ApiController, Request, Response } from '@libs/core';
import { Controller, Get, Req, Res, UseGuards, Post, Patch} from '@nestjs/common';
//import { MustBeAuthenticated } from '../guards'

@Controller('')
export class IntroController extends ApiController {

  @Get('')
  myintro(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Hey! This is Mitesh Metha thanks for visiting :) follow the following to Tryout the API : https://miteshmetha.com/apiguide")
  }    

  @Get('/login')
  loginget(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Login is a POST Request follow guide here: https://miteshmetha.com/apiguide")
  } 
  @Get('/register')
  registerget(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Register is a POST Request follow guide here: https://miteshmetha.com/apiguide")
  } 
}