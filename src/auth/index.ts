import { HttpModule, Module } from '@nestjs/common';
import { UserModule } from '@app/user';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { getProviders } from './provider';

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
  ],
  controllers: [AuthController],
  providers: getProviders(),
})
export class AuthModule {}
