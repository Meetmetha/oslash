import { Module } from '@nestjs/common';
import { getProviders } from './provider';
import { WalletController } from './controller/controller';
import { MongooseModule } from '@nestjs/mongoose';
import { getModels } from './models';
import { WalletService } from './services/service';
import { providerMap } from './provider.map';
import { WalletRepository } from './repositories/database';

@Module({
  imports: [MongooseModule.forFeature(getModels(), 'database')],
  controllers: [WalletController],
  providers: getProviders(),
  exports: [
    WalletService,
    {
      provide: providerMap.WALLET_REPO,
      useClass: WalletRepository,
    },
  ],
})
export class WalletModule {}

