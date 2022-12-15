import { Module } from '@nestjs/common';
import { SpectatorTvService } from './spectator-tv.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  providers: [SpectatorTvService],
  exports: [SpectatorTvService],
})
export class SpectatorTvModule {}
