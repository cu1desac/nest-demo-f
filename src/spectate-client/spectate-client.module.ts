import { Module } from '@nestjs/common';
import { SpectateClientService } from './spectate-client.service';
import { SpectateClientController } from './spectate-client.controller';
import { RiotApiModule } from '../../utils/riot-api/riot-api.module';
import { SpectatorTvModule } from '../../utils/spectator-tv/spectator-tv.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [RiotApiModule, SpectatorTvModule, HttpModule],
  controllers: [SpectateClientController],
  providers: [SpectateClientService],
})
export class SpectateClientModule {}
