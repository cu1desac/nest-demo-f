import { Controller, Get, StreamableFile, Param, Ip } from '@nestjs/common';
import { ObserverService } from './observer.service';

@Controller('observer-mode/rest/consumer')
export class ObserverController {
  constructor(private readonly observerService: ObserverService) {}

  //http://spectator.kr.lol.riotgames.com/observer-mode/rest/consumer/version  @Param('id') id: string
  @Get('version')
  version() {
    console.log('version 2.0.0');
    return '2.0.0';
  }
  //获取预览信息
  @Get('getGameMetaData/:platformId/:gameId/:randomSign/token')
  public async getGameMetaData(
    @Param('platformId') platformId: string,
    @Param('gameId') gameId: string,
    @Param('randomSign') randomSign: string,
    @Ip() ip: string,
  ) {
    //ipv6地址：::ffff:127.0.0.1
    // const ipArr = ip.split(':');
    // const realIp = ipArr.length > 1 ? ipArr[ipArr.length - 1] : ip;
    return this.observerService.getGameMetaData(
      platformId,
      gameId,
      randomSign,
      ip,
    );
  }
  //获取最新数据
  @Get('getLastChunkInfo/:platformId/:gameId/0/token')
  public async getLastChunkInfo(
    @Param('platformId') platformId: string,
    @Param('gameId') gameId: string,
    @Ip() ip: string,
  ) {
    return this.observerService.getLastChunkInfo(platformId, gameId, ip);
  }
  //获取chunk数据
  @Get('getGameDataChunk/:platformId/:gameId/:chunkId/token')
  public async getGameDataChunk(
    @Param('platformId') platformId: string,
    @Param('gameId') gameId: string,
    @Param('chunkId') chunkId: number,
    @Ip() ip: string,
  ): Promise<StreamableFile> {
    console.log('chunkId=====>', chunkId);
    return this.observerService.getGameDataChunk(platformId, gameId, chunkId, ip);
  }
  //获取chunk数据 http://127.0.0.1:3001/observer-mode/rest/consumer/getKeyFrame/NA1/6265656659/6/token
  @Get('getKeyFrame/:platformId/:gameId/:frameId/token')
  public async getKeyFrame(
    @Param('platformId') platformId: string,
    @Param('gameId') gameId: string,
    @Param('frameId') frameId: number,
    @Ip() ip: string,
  ): Promise<StreamableFile> {
    console.log('frameId=====>', frameId);
    return this.observerService.getKeyFrame(platformId, gameId, frameId, ip);
  }
}
