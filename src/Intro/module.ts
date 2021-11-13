import { Module, HttpModule } from '@nestjs/common';
import { IntroController } from './controllers';

@Module({
  imports: [HttpModule],
  controllers: [IntroController],
})
export class IntroModule {}
