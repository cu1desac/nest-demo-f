import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SpectateClientService } from './spectate-client.service';
import { CreateSpectateClientDto } from './dto/create-spectate-client.dto';
import { UpdateSpectateClientDto } from './dto/update-spectate-client.dto';
import { SpectatorTvService } from '../../utils/spectator-tv/spectator-tv.service';
import { distinct, tap, toArray } from 'rxjs';

@Controller('spectate-client')
export class SpectateClientController {
  constructor(
    private readonly spectateClientService: SpectateClientService,
    private readonly spectatorTvService: SpectatorTvService,
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
    return this.spectateClientService.activeTest([
      {
        platformId: 'kr',
        summonerName: 'NS 탑',
      },
      {
        platformId: 'kr',
        summonerName: 'NS Calix',
      },
      {
        platformId: 'kr',
        summonerName: 'Kariszz',
      },
    ]);
  }
  @Get('many')
  many() {}
  @Get('rxjs')
  rxjs() {
    return this.spectateClientService.rxjs();
  }
  @Get('download')
  download() {
    return this.spectateClientService.downloadGameTest();
  }
  @Post()
  create(@Body() createSpectateClientDto: CreateSpectateClientDto) {
    return this.spectateClientService.create(createSpectateClientDto);
  }

  @Get()
  findAll() {
    return this.spectateClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spectateClientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpectateClientDto: UpdateSpectateClientDto,
  ) {
    return this.spectateClientService.update(+id, updateSpectateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spectateClientService.remove(+id);
  }
}
