import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable, retry, shareReplay, timer } from 'rxjs';

@Injectable()
export class RiotAxiosService {
  constructor(private readonly httpService: HttpService) {}
  // Axios 出错后延迟2秒重试两次
  get(url: string): Observable<any> {
    return this.httpService.get(url).pipe(
      retry({
        count: 2,
        delay: () => timer(2000),
      }),
      map((res) => res.data),
      shareReplay(1),
    );
  }
}
