import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@app/db';


import { SpectateClientModule } from './spectate-client/spectate-client.module';
import { RiotApiModule } from '../utils/riot-api/riot-api.module';
import { HttpModule } from '@nestjs/axios';
import { ObserverModule } from './observer/observer.module';
import { SpectateModule } from './spectate/spectate.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    DbModule,
    SpectateClientModule,
    RiotApiModule,
    HttpModule,
    ObserverModule,
    SpectateModule,
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
