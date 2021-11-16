import { Module } from '@nestjs/common';
import { getProviders } from './provider';
import { ShortcutController } from './controller/controller';
import { MongooseModule } from '@nestjs/mongoose';
import { getModels } from './models';
import { ShortcutService } from './services/service';
import { providerMap } from './provider.map';
import { ShortcutRepository } from './repositories/database';

@Module({
  imports: [MongooseModule.forFeature(getModels(), 'database')],
  controllers: [ShortcutController],
  providers: getProviders(),
  exports: [
    ShortcutService,
    {
      provide: providerMap.SHORTCUT_REPO,
      useClass: ShortcutRepository,
    },
  ],
})
export class ShortcutModule {}

