import { Module } from '@nestjs/common';
import { SpectateService } from './spectate.service';
import { SpectateController } from './spectate.controller';

@Module({
  controllers: [SpectateController],
  providers: [SpectateService]
})
export class SpectateModule {}
