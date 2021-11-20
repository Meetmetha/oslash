import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MeiliSearchModule } from 'nestjs-meilisearch';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IntroModule } from './Intro'
import config from '@config/index';
import { CoreModule } from '@libs/core';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from '@app/auth'
import { ShortcutModule } from '@app/shortcut'
import { SessionChecker } from './auth/sessionChecker';

@Module({
  imports: [
    CoreModule,
    IntroModule,
    AuthModule,
    ShortcutModule,
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionChecker)
      .forRoutes('shortcut');
  }
}
