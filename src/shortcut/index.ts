import { Module, NestModule, MiddlewareConsumer, HttpModule, Session } from '@nestjs/common';
import { getProviders } from './provider';
import { ShortcutController } from './controller/controller';
import { MongooseModule } from '@nestjs/mongoose';
import { getModels } from './models';
import { ShortcutService } from './services/service';
import { providerMap } from './provider.map';
import { ShortcutRepository } from './repositories/database';
import { SessionChecker } from '@app/auth/sessionChecker';
import { AuthService } from '@app/auth/auth.service';
import { AuthModule } from '@app/auth';

@Module({
  imports: [MongooseModule.forFeature(getModels(), 'database')],
  controllers: [ShortcutController],
  providers: getProviders(),
  exports: [
    {
      provide: providerMap.SHORTCUT_REPO,
      useClass: ShortcutRepository,
    },
    ShortcutService,
  ],
})
export class ShortcutModule{}

