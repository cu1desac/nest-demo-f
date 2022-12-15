import { Injectable } from '@nestjs/common';
import { RiotApiService } from '../utils/riot-api/riot-api.service';
import { HttpService } from '@nestjs/axios';
import {
  catchError,
  concat,
  concatAll,
  concatMap,
  concatWith,
  connect,
  from,
  map,
  Observable,
  of,
  retry,
  retryWhen,
  shareReplay,
  take,
  tap,
  throwError,
  timer,
  using,
} from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(
    private readonly riotApi: RiotApiService,
    private readonly httpService: HttpService,
  ) {}
  getHello(): string {
    console.log('hi');
    return 'Hello World!';
  }

  test(): string {
    return '777';
  }
  riotTest() {
    return this.riotApi.summonerInfoByName('kr', '아이러니zz').pipe(
      map((summonerInfo) => summonerInfo.id),
      concatMap((accountId) =>
        this.riotApi.activeGameInfoBySummonerId('kr', accountId),
      ),
    );
  }
  rxjsTest() {
    return this.httpService
      .get(
        'https://lolspectator.tv/spectate?name=%EC%83%8C%EB%B0%95+%ED%81%B4%EB%A1%9C%EC%A0%80&region=KR',
        {
          timeout: 1000,
        },
      )
      .pipe(
        tap(() => {
          console.log('go');
        }),
        map((data) => data.data),
        retry({
          count: 2,
          delay: (error: any, retryCount: number) => {
            console.log(
              error === 'AxiosError: timeout of 300ms exceeded',
              '======>',
              retryCount,
              '======>',
              error,
            );
            return throwError(error);
            //return timer(2000);
          },
        }),
      );

    const url1$: Observable<string> = this.httpService
      .get('http://localhost:3001/url1')
      .pipe(
        map((data) => data.data),
        tap((data) => {
          console.log(data);
        }),
        //shareReplay(1),
      );

    const data$ = (url) =>
      this.httpService.get(url).pipe(map((data) => data.data));

    // concatAll 成功
    // return url1$.pipe(
    //   map((v) => data$(v)),
    //   concatAll(),
    //   map((v) => data$(v)),
    //   concatAll(),
    // );
    return url1$.pipe(
      concatMap((url) => data$(url)),
      concatMap((url) => data$(url)),
    );

    //concatMap 是成功的
    //return url1$.pipe(concatMap(data$));

    //return this.riotApi.test();
  }
}
