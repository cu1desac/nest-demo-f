import { Module } from '@nestjs/common';
import { ObserverService } from './observer.service';
import { ObserverController } from './observer.controller';

@Module({
  controllers: [ObserverController],
  providers: [ObserverService],
})
export class ObserverModule {}
