import { Module } from '@nestjs/common';
import { RiotAxiosService } from './riot-axios.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 7000,
      responseType: 'json',
      headers: {
        'X-Riot-Token': 'RGAPI-1f699c76-3deb-42a9-89e7-69bde823d36a',
      },
    }),
  ],
  providers: [RiotAxiosService],
  exports: [RiotAxiosService],
})
export class RiotAxiosModule {}
