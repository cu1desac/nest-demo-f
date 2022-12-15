import { Injectable } from '@nestjs/common';
import { RiotAxiosService } from '../riot-axios/riot-axios.service';
import { SummonerInfo } from './interfaces/SummonerInfo.interface';
import { concatAll, map, Observable } from 'rxjs';
import { ActiveGameInfo } from './interfaces/ActiveGameInfo.interface';

@Injectable()
export class RiotApiService {
  constructor(private readonly riotAxios: RiotAxiosService) {}
  test() {
    return this.summonerInfoByName('na1', 'Samuraibull');
  }

  //根据召唤师Name返回召唤师账号信息
  summonerInfoByName(
    platformId: string,
    summonerName: string,
  ): Observable<SummonerInfo> {
    return this.riotAxios.get(
      `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
        summonerName,
      )}`,
    );
  }
  //根据召唤师accountId返回召唤师账号信息
  summonerInfoByAccountId(
    platformId: string,
    accountId: string,
  ): Observable<SummonerInfo> {
    return this.riotAxios.get(
      `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}`,
    );
  }
  //根据召唤师PUUID返回召唤师账号信息
  summonerInfoByPuuid(
    platformId: string,
    puuid: string,
  ): Observable<SummonerInfo> {
    return this.riotAxios.get(
      `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
    );
  }
  //根据召唤师summonerId返回召唤师账号信息
  summonerInfoBySummonerId(
    platformId: string,
    summonerId: string,
  ): Observable<SummonerInfo> {
    return this.riotAxios.get(
      `https://${platformId}.api.riotgames.com/lol/summoner/v4/summoners/summonerId/${summonerId}`,
    );
  }
  //观战。获取当前游戏对局信息
  activeGameInfoBySummonerId(
    platformId: string,
    summonerId: string,
  ): Observable<ActiveGameInfo> {
    return this.riotAxios.get(
      `https://${platformId}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}`,
    );
  }
  //观战，获取当前游戏对局信息
  activeGameInfoBySummonerName(
    platformId: string,
    summonerName: string,
  ): Observable<ActiveGameInfo> {
    return this.summonerInfoByName(platformId, summonerName).pipe(
      map((summonerInfo: SummonerInfo) =>
        this.activeGameInfoBySummonerId(platformId, summonerInfo.id),
      ),
      concatAll(),
    );
  }
}
