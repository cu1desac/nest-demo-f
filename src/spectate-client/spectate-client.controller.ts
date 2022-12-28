import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { SpectateClientService } from './spectate-client.service';

@Controller('spectate-client')
export class SpectateClientController {
  constructor(
    private readonly spectateClientService: SpectateClientService,
  ) {}

  @Get('test')
  test(
    @Query('platformId') platformId: string,
    @Query('summonerName') summonerName: string,
  ) {
    return this.spectateClientService.activeGameInfo(
      platformId.toUpperCase(),
      summonerName,
    );
  }
  @Get('active')
  active() {
    return this.spectateClientService.activeGameFromSummonerDb();
    return this.spectateClientService.activeTest([
      {
        platformId: 'kr',
        summonerName: 'Yoon SeokJun',
      },
      {
        platformId: 'kr',
        summonerName: '못먹겟어삼각김밥',
      },
      {
        platformId: 'kr',
        summonerName: 'krats aira',
      },
    ]);
  }
  @Get('rxjs')
  rxjs() {
    return this.spectateClientService.rxjs();
  }
  @Get('download')
  download() {
    return this.spectateClientService.downloadGameTest();
  }
}
