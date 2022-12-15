import { Module } from '@nestjs/common';
import { RiotApiService } from './riot-api.service';
import { RiotAxiosModule } from '../riot-axios/riot-axios.module';

@Module({
  imports: [RiotAxiosModule],
  providers: [RiotApiService],
  exports: [RiotApiService],
})
export class RiotApiModule {}
