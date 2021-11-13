import { WalletService } from '../services/service';
import {
  WalletTransformer,
  TransactionTransformer,
} from '@app/wallet/Transformer';
import { Controller, Get, Res, Req, UseGuards, Post } from '@nestjs/common';
import { ApiController } from '@libs/core';
import { MustBeAuthenticated } from '@app/auth/guards';

@Controller('/wallet')
@UseGuards(MustBeAuthenticated)
export class WalletController extends ApiController {
  constructor(private service: WalletService) {
    super();
  }

  @Get('/create')
  async createWallet(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const wallet = await this.service.createWallet(req.user);
    return res.success("Wallet Created");
  }

  @Get('')
  async getUserWallet(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const wallet = await this.service.getUserWallet(req.user);
    return res.success(await this.transform(wallet, new WalletTransformer()));
  }

  @Post('/credit')
  async credittowallet(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const walletcredit = await this.service.creditWallet(req.user, req.all());
    return res.success({
      result:
        'Your wallet is Credited!',
    });
  }

  @Post('/debit')
  async debitfromwallet(
    @Req() req: any,
    @Res() res: any,
  ): Promise<Record<string, any>> {
    const walletdebit = await this.service.debitWallet(req.user, req.all());
    return res.success({
      result:
        'Your Wallet is Debited',
    });
  }
}
