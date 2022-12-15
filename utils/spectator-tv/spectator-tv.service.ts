import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  catchError,
  map,
  Observable,
  retry,
  shareReplay,
  tap,
  throwError,
  timer,
} from 'rxjs';
import * as cheerio from 'cheerio';
import { PlatformIdAndGameIdAndSummonerName } from './interfaces/PlaftformIdAndGameId';

@Injectable()
export class SpectatorTvService {
  constructor(private readonly http: HttpService) {}
  //根据召唤师昵称和platform获取是否在对局中，返回整个网页信息，主要包含cmd观战指令
  activeGameBySummonerName(
    platformId: string,
    summonerName: string,
  ): Observable<string> {
    //将platformId转为此网站region
    const region =
      platformId.length > 2
        ? platformId.substring(0, platformId.length - 1)
        : platformId;
    const now = new Date().valueOf();
    return this.http
      .get(
        `https://lolspectator.tv/spectate?name=${encodeURIComponent(
          summonerName,
        )}&region=${region.toUpperCase()}`,
      )
      .pipe(
        tap(() => {
          console.log(new Date().valueOf() - now);
        }),
        retry({
          count: 2,
          delay: (error) => {
            const status = error.toJSON().status;
            if (status === 404) throw `${summonerName}未在游戏中`;
            return timer(2000);
          },
        }),
        map((data) => data.data),
        shareReplay(1),
        catchError(() => {
          throw `${summonerName}specTv error`;
        }),
      );
  }
  //根据召唤师昵称和platform返回gameId
  activeGameIdBySummonerName(
    platformId: string,
    summonerName: string,
  ): Observable<string> {
    return this.activeGameBySummonerName(platformId, summonerName).pipe(
      map((html: string) => {
        const $ = cheerio.load(html);
        const data: string | string[] = $('#windows-script').val();
        if (!data || Array.isArray(data)) throw 'spectatorTv error';
        // cd /d \"C:Riot GamesLeague of LegendsGame\" & \"League of …zKBX147/yeROHoaN41ztPy71Rlvo 6239281573 KR\" \"-UseRads\"
        const arr: string[] = data.split(' ');
        if (arr.length !== 16) throw 'spectatorTv error';
        //gameId
        return arr[13];
        // return { platformId, gameId: arr[13] };
      }),
    );
  }
  activeGameIdBySummonerName2(
    platformId: string,
    summonerName: string,
  ): Observable<PlatformIdAndGameIdAndSummonerName> {
    return this.activeGameBySummonerName(platformId, summonerName).pipe(
      map((html: string) => {
        const $ = cheerio.load(html);
        const data: string | string[] = $('#windows-script').val();
        if (!data || Array.isArray(data)) throw 'spectatorTv error';
        // cd /d \"C:Riot GamesLeague of LegendsGame\" & \"League of …zKBX147/yeROHoaN41ztPy71Rlvo 6239281573 KR\" \"-UseRads\"
        const arr: string[] = data.split(' ');
        if (arr.length !== 16) throw 'spectatorTv error';
        //gameId
        //return arr[13];
        return { platformId, gameId: arr[13], summonerName };
      }),
    );
  }
  //根据召唤师昵称和platform返回gameId、
}
