import { container } from './container';
import { HttpModule, Module } from '@nestjs/common';
import { UserModule } from '@app/user';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { getProviders } from './provider';
import { getModels } from './models';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TokenRepository,
} from './repositories/database';
import { ShortcutModule } from '@app/shortcut';
import { AuthService } from './auth.service';
import { SessionChecker } from './sessionChecker';

@Module({
  imports: [
    HttpModule,
    /**
     * User's Module
     */
    UserModule,
    /**
     * Passport Module
     */
    PassportModule.register({ defaultStrategy: 'jwt' }),

    /**
     * Jwt Module
     */
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('auth.jwt.secret'),
        signOptions: { expiresIn: configService.get('auth.jwt.ttl') },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature(getModels(), 'database')
  ],
  controllers: [AuthController],
  providers: getProviders(),
  exports: [
    {
      provide: container.TOKEN_REPOSITORY,
      useClass: TokenRepository,
    },
  ],
})
export class AuthModule {}
