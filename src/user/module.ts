import { getProviders } from './provider';
import { getModels } from './models';
import { Module, HttpModule } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { container } from './container';
import { UserRepository} from './repositories/database';
import { UserListener } from './listener';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { basePath } from '@libs/core/helpers';
import { ShortcutModule } from '@app/shortcut';

@Module({
  imports: [
    HttpModule,
    ShortcutModule,
    MongooseModule.forFeature(getModels(), 'database')
  ],
  controllers: [UserController],
  providers: getProviders(),
  exports: [
    UserListener,
    UserService,
    {
      provide: container.USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
