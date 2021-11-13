import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user';
import { IntroModule } from './Intro'
import config from '@config/index';
import { CoreModule } from '@libs/core';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from '@app/auth'
import { WalletModule } from '@app/wallet'

@Module({
  imports: [
    CoreModule,
    IntroModule,
    UserModule,
    AuthModule,
    WalletModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'database',
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get('db.uri'),
          useFindAndModify: true,
          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
