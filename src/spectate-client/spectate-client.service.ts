import { Inject, Injectable } from '@nestjs/common';
import { CreateSpectateClientDto } from './dto/create-spectate-client.dto';
import { UpdateSpectateClientDto } from './dto/update-spectate-client.dto';
import { User } from '@app/db//schemas/User.schame';
import {
  ArraySubDocumentType,
  DocumentType,
  ReturnModelType,
  SubDocumentType,
} from '@typegoose/typegoose';
import { SpectatorTvService } from '../../utils/spectator-tv/spectator-tv.service';
import { RiotApiService } from '../../utils/riot-api/riot-api.service';
import {
  catchError,
  concatAll,
  concatMap,
  defaultIfEmpty,
  delay,
  distinct,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  isEmpty,
  lastValueFrom,
  map,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  Observable,
  of,
  race,
  retry,
  take,
  tap,
  timer,
  toArray,
  using,
} from 'rxjs';
import { Game } from '@app/db/schemas/Game.schame';
import * as fs from 'fs';
const fsp = fs.promises;
import * as path from 'path';
import { SummonerInfo } from '../../utils/riot-api/interfaces/SummonerInfo.interface';
import { ActiveGameInfo } from '../../utils/riot-api/interfaces/ActiveGameInfo.interface';
import { PlatformIdAndGameIdAndSummonerName } from '../../utils/spectator-tv/interfaces/PlaftformIdAndGameId';
import { PlatformIdAndSummonerName } from './interfaces/PlatformIdAndSummonerName.interface';
import { HttpService } from '@nestjs/axios';
import { LastChunkInfo } from './interfaces/LastChunkInfo.interface';
import * as stream from 'stream';
import { raw } from 'express';
import { GameDb } from './interfaces/GameDb.interface';

@Injectable()
export class SpectateClientService {
  constructor(
    @Inject(User.name) private readonly UserModel: ReturnModelType<typeof User>,
    @Inject(Game.name) private readonly GameModel: ReturnModelType<typeof Game>,
    private readonly SpectatorTvService: SpectatorTvService,
    private readonly RiotApiService: RiotApiService,
    private readonly httpService: HttpService,
  ) {}

  //数据库查找是否已经含有此局game
  private async screenPendingGameNotInDb(
    platformIdAndGameIdAndSummonerName: PlatformIdAndGameIdAndSummonerName,
  ): Promise<PlatformIdAndGameIdAndSummonerName> {
    const { platformId, gameId } = platformIdAndGameIdAndSummonerName;
    const game = await this.GameModel.findOne({
      'gameInfo.platformId': platformId.toUpperCase(),
      'gameInfo.gameId': gameId,
      'gameInfo.gamePending': true,
    }).exec();
    if (game) throw `当前对局${gameId}已记录`;
    return platformIdAndGameIdAndSummonerName;
  }
  //是否为指定模式、开局时长 游戏
  static isTargetGame(activeGameInfo: ActiveGameInfo): boolean {
    const { mapId, gameMode, gameType, gameQueueConfigId, gameLength } =
      activeGameInfo;
    //非指定游戏地图
    if (mapId !== 11 || gameMode !== 'CLASSIC') {
      return false;
    }
    //游戏时长大于3分钟
    if (gameLength > 180) {
      return false;
    }
    return true;
  }
  //组装插入数据库的格式
  static formGameDto(activeGameInfo: ActiveGameInfo): GameDb {
    const {
      gameId,
      platformId,
      observers: { encryptionKey },
      gameStartTime,
    } = activeGameInfo;
    const filepath = path.join(
      `I:\\LOLspectator\\${platformId}\\low\\${gameId}`,
    );
    return {
      gameInfo: {
        gameId,
        platformId,
        encryptionKey,
        gameStartTime,
        gamePending: true,
      },
      fileInfo: [
        {
          storageType: 'local',
          storageNote: 'PM9A1',
          filepath,
          // startChunkId: 1,
          // startFrameId: 1,
          nextChunkId: 1,
          nextFrameId: 1,
          creatTime: String(new Date().getTime()),
        },
      ],
    };
  }
  public activeTest(platformIdAndSummonerNames: PlatformIdAndSummonerName[]) {
    return from(platformIdAndSummonerNames).pipe(
      //SpectatorTv查看是否在游戏中
      mergeMap((val: PlatformIdAndSummonerName) =>
        this.SpectatorTvService.activeGameIdBySummonerName(
          val.platformId,
          val.summonerName,
        ).pipe(
          map(
            (gameId: string) =>
              ({
                ...val,
                gameId: gameId,
              } as PlatformIdAndGameIdAndSummonerName),
          ),
          //未在游戏，直接忽略
          catchError(() => of(false)),
          filter(Boolean),
        ),
      ),
      distinct((val: PlatformIdAndGameIdAndSummonerName) => val.gameId),
      //游戏中，并且未在数据库中
      mergeMap((val: PlatformIdAndGameIdAndSummonerName) =>
        from(this.screenPendingGameNotInDb(val)).pipe(
          //已在数据库，忽略
          catchError(() => of(false)),
          filter(Boolean),
        ),
      ),
      //游戏中，用拳头API获取数据
      mergeMap((val: PlatformIdAndGameIdAndSummonerName) =>
        this.RiotApiService.activeGameInfoBySummonerName(
          val.platformId,
          val.summonerName,
        ),
      ),
      //过滤 指定模式、游戏已进行时长等
      filter(SpectateClientService.isTargetGame),
      //组装插入数据库的类型
      map(SpectateClientService.formGameDto),
      tap((val) => {
        console.log(val);
      }),
      //创建本地文件夹
      mergeMap((val: GameDb) =>
        forkJoin({
          mkdir: SpectateClientService.mkdir(val.fileInfo[0].filepath),
          creatDb: this.GameModel.create(val),
        }),
      ),
      defaultIfEmpty('no summoner meet the conditions'),
      //catchError((err) => of(null)),
      //mergeMap((activeGameInfo: ActiveGameInfo) => from(SpectateClientService.mkdir())),
      //map((value: PlatformIdAndGameIdAndSummonerName) => ),
    );
    //.pipe(catchError((err) => of(null)));
  }

  //返回当前对局信息
  activeGameInfo(platformId: string, summonerName: string) {
    // const now = new Date().valueOf();
    // return from(
    //   this.GameModel.findOne({
    //     'gameInfo.platformId': 'NA1',
    //     'gameInfo.gameId': '4394981476',
    //   }),
    // ).pipe(
    //   tap((val) => {
    //     console.log(new Date().valueOf() - now);
    //   }),
    // );

    //数据库查找是否已经含有此局game
    const queryPendingGameByGameId = (platformId: string, gameId: string) =>
      from(
        this.GameModel.findOne({
          'gameInfo.platformId': platformId.toUpperCase(),
          'gameInfo.gameId': gameId,
          'gameInfo.gamePending': true,
        }),
      ).pipe(
        map((gameInfo) => {
          if (gameInfo) throw `当前对局${gameId}已记录`;
          return gameId;
        }),
      );
    //过滤对局
    const screenActiveGame = ({
      mapId,
      gameMode,
      gameType,
      gameQueueConfigId,
      gameLength,
    }: ActiveGameInfo) => {
      //非指定游戏地图
      if (mapId !== 11 || gameMode !== 'CLASSIC') {
        return false;
      }
      //游戏时长大于3分钟
      if (gameLength > 180) {
        return false;
      }
      return true;
    };
    //
    return this.SpectatorTvService.activeGameIdBySummonerName(
      platformId,
      summonerName,
    ).pipe(
      //数据库查找是否已经含有此局game;已有就报错
      concatMap((gameId: string) =>
        queryPendingGameByGameId(platformId, gameId),
      ),
      //获取 summonerId
      concatMap(() =>
        this.RiotApiService.summonerInfoByName(platformId, summonerName).pipe(
          map((summonerInfo: SummonerInfo) => summonerInfo.id),
          delay(1500),
        ),
      ),
      //根据Riot Api获取对局信息;过滤
      concatMap((summonerId: string) =>
        this.RiotApiService.activeGameInfoBySummonerId(
          platformId,
          summonerId,
        ).pipe(filter(screenActiveGame), delay(1500)),
      ),
      //保存到数据库
    );
  }
  //多并发观战处理
  many(platformIdAndSummonerNames: PlatformIdAndSummonerName[]) {}
  //rxjs测试
  public async rxjs() {
    const stats = await fsp.stat('I:\\LOLspectator\\KR\\low\\62587848741');

    return of(undefined).pipe(
      filter(Boolean),
      tap((val) => {
        console.log(val);
      }),
    );

    return from([1, 2, 3, 4]).pipe(
      filter((v) => v === 0),
      isEmpty(),
      defaultIfEmpty('666'),
      catchError((e) => {
        console.log(e);
        return of(666);
      }),
      map(() => 666),
    );
  }
  //从数据库取出正在进行的游戏
  private queryDbPendingGames(limit = 10, page = 1) {
    return from(
      this.GameModel.find({ 'gameInfo.gamePending': true })
        .skip((page - 1) * limit)
        .limit(limit),
    ).pipe(filter((data) => data !== null));
  }
  //从数据库取出正在进行的游戏
  private async queryDbPendingGames2(limit = 10, page = 1): Promise<Game[]> {
    return (await this.GameModel.find({ 'gameInfo.gamePending': true })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()) as Game[];
  }
  //game是否滞后
  static isLagGame(game: Game): boolean {
    const {
      fileInfo: [{ nextChunkId, nextFrameId, creatTime }],
    } = game;
    const now = new Date().getTime();
    //允许的时间误差
    const chunkAllowDelay = 800000;
    const frameAllowDelay = 600000;
    const allowDelay = 300000;
    //现在 和 本地文件夹创建 的时间间隔
    return (
      creatTime + (nextChunkId - 1) * 30 * 1000 + allowDelay <= now &&
      creatTime + (nextFrameId - 1) * 60 * 1000 + allowDelay * 2 <= now
    );
    //现在的时间 - 创建的时间  -  chunk * n * 30 *1000  - 60 * 1000
  }
  //删除滞后游戏文件及文件夹
  //删除目录及目录下的文件
  static async rmdir(file: string) {
    try {
      const stats = await fsp.stat(file);
      //文件，直接删除即可
      if (stats.isFile()) {
        await fsp.unlink(file);
        return;
      }
      //到这里都是文件夹了
      const paths = await fsp.readdir(file);
      await Promise.all(
        paths.map(async (v) => {
          const childFile = path.resolve(file, v);
          await SpectateClientService.rmdir(childFile);
        }),
      );
      await fsp.rmdir(file);
      return 'delete success';
    } catch (e) {
      throw e;
    }
  }
  //从数据库删除game
  private async deleteLagDbGame(id: string): Promise<DocumentType<Game>> {
    return (await this.GameModel.findByIdAndDelete(
      id,
    ).exec()) as DocumentType<Game>;
    //return from(this.GameModel.findByIdAndDelete(id));
  }
  //获取lastChunkInfo
  private getLastChunkInfo(
    platformId: string,
    gameId: string,
  ): Observable<LastChunkInfo> {
    const url = `http://spectator.${platformId}.lol.riotgames.com/observer-mode/rest/consumer/getLastChunkInfo/${platformId.toUpperCase()}/${gameId}/0/token`;
    return this.httpService
      .get(url, { timeout: 7000, responseType: 'json' })
      .pipe(
        retry({ count: 1, delay: () => timer(2000) }),
        map((data) => data.data),
      );
  }
  //过滤出要下载chunk的对局  按照chunk 而不是nextChunk
  static isNeedDownloadChunk(
    localNextChunkId: number,
    httpChunkId: number,
  ): boolean {
    return httpChunkId >= localNextChunkId;
  }
  //过滤出要下载frame的对局
  static isNeedDownloadFrame(
    localNextFrameId: number,
    httpFrameId: number,
  ): boolean {
    return httpFrameId >= localNextFrameId;
  }
  //http.get下载文件    ？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？出错，记得处理.如果下载出错，是不能更新数据库的哦
  private httpDownloadData(url: string): Observable<stream> {
    return this.httpService
      .get(url, {
        timeout: 8000,
        responseType: 'stream',
      })
      .pipe(
        retry({
          count: 1,
          delay: () => timer(2000),
        }),
        map((data) => data.data),
      );
  }
  //通过stream保存文件
  static pipeStream(httpStream: stream, filepath: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const ws = fs.createWriteStream(filepath);
      httpStream.pipe(ws);
      httpStream.on('error', reject);
      httpStream.on('end', resolve);
      //ws.on('error', () => reject('ws error'))
    });
  }
  //更新数据库    游戏结束后，记得按照LastChunkInfo.startGameChunkId 更新数据库中的开始游戏ID
  private async updateGameDb(
    game: DocumentType<Game>,
    lastChunkInfo: LastChunkInfo,
  ) {
    const {
      _id,
      fileInfo: [{ _id: fileInfo_id, nextChunkId, filepath }],
    } = game as any;
    const {
      chunkId,
      keyFrameId,
      startGameChunkId,
      endGameChunkId,
      nextAvailableChunk,
    } = lastChunkInfo;
    const filter = { $and: [{ _id }, { 'fileInfo._id': fileInfo_id }] };
    //游戏没结束。
    if (nextChunkId !== chunkId) {
      const data = {
        $set: {
          'fileInfo.$.nextChunkId': chunkId === 0 ? 1 : chunkId + 1,
          'fileInfo.$.nextFrameId': keyFrameId === 0 ? 1 : keyFrameId + 1,
        },
      };
      return this.GameModel.updateOne(filter, data);
    }
    //游戏结束，此外，"nextAvailableChunk": 0,
    //获取chunk或keyFrame 开始ID
    const getStartId = async (filepath, targetFileKeyWord) => {
      const files = await fs.promises.readdir(filepath);
      const index = files.reduce((total, currentValue) => {
        if (currentValue.indexOf(targetFileKeyWord) === -1) return total;
        const i = Number(currentValue.replace(targetFileKeyWord, ''));
        if (total <= i) return total;
        return i;
      }, 1000);
      if (index >= 1000)
        throw { filepath, targetFileKeyWord, note: 'getStartId id is gt 1000' };
      return index;
    };
    const localStartChunkId = await getStartId(filepath, 'gameDataChunk');
    const localStartFrameId = await getStartId(filepath, 'keyFrame');
    //开始chunkId。如果从游戏中途开始下载，那chunkId就按照本地，否则按照http返回的（默认为2）
    const startChunkId =
      localStartChunkId >= startGameChunkId
        ? localStartChunkId
        : startGameChunkId;
    const data = {
      $set: {
        'gameInfo.gamePending': false,
        'gameInfo.startChunkId': startChunkId,
        'gameInfo.startFrameId': localStartFrameId,
        'gameInfo.endChunkId': endGameChunkId, // chunkId 也可以
        'gameInfo.endFrameId': keyFrameId,
      },
    };
    return this.GameModel.updateOne(filter, data);
  }

  //下载文件  !!数据库取出的数据，记得用 JSON.parse(JSON.stringify(games)) 处理
  private downloadGame(game: Game) {
    of(game).pipe(
      //获取lastChunkInfo
      concatMap((game: Game) =>
        this.getLastChunkInfo(
          game.gameInfo.platformId,
          String(game.gameInfo.gameId),
        ),
      ),
      filter((lastChunkInfo: LastChunkInfo) => {
        const {
          fileInfo: [{ nextChunkId, nextFrameId, creatTime }],
        } = game;
        return true;
      }),
    );
  }
  static async mkdir(filepath): Promise<boolean> {
    try {
      await filepath.split('\\').reduce(async (totalPath, folder) => {
        const currentPath = (await totalPath) + folder + path.sep;
        try {
          await fsp.access(currentPath);
        } catch (e) {
          await fsp.mkdir(currentPath);
        }
        return currentPath;
      }, Promise.resolve(''));
      return true;
    } catch (e) {
      throw false;
    }
  }
  private deleteLagGameForDbAndFile(game: Game) {
    return of(game).pipe(
      filter(SpectateClientService.isLagGame),
      //删除本地文件，删除数据库记录
      mergeMap((game: DocumentType<Game>) =>
        forkJoin({
          rmdir: SpectateClientService.rmdir(game.fileInfo[0].filepath),
          deleteLagDbGame: this.deleteLagDbGame(game._id.toString()),
        }),
      ),
      defaultIfEmpty(() => of(`${game.gameInfo.gameId} isn't lag`)),
      catchError((e) => of(`deleteLagGameForDbAndFile error`)),
    );
  }
  public downloadGameTest() {
    //{ 'gameInfo.gameId': '123456' }
    return from(this.queryDbPendingGames2(1)).pipe(
      map((games: Game[]) => from(games)),
      mergeAll(),
      //删除过时对局和
      mergeMap((game: Game) =>
        forkJoin({
          deleteLagGame: this.deleteLagGameForDbAndFile(game),
        }),
      ),
      // filter((game: Game) => !SpectateClientService.isLagGame(game)),
      // tap((i) => {
      //   console.log(i);
      // }),
      // map((game: Game) => new Date().getTime()),
      // isEmpty(),
      //map((games: Game[]) => games.map((game, index) => index)),
    );
  }

  //从数据库取出正在对局的游戏，然后下载
  // downloadGameTest() {
  //
  //   this.queryDbPendingGames(1).pipe(
  //     map((data: DocumentType<Game>) => {
  //
  //     }),
  //   )
  //
  //   return this.queryDbPendingGames(1).pipe(
  //     //单一的game
  //     mergeMap((data: ArraySubDocumentType<Game>[]) =>
  //       //感觉这个from没有必要啊，用forkjoin改造一下吧
  //       from(data).pipe(
  //         filter((game) => SpectateClientService.isLagGame(game)),
  //         isEmpty(),
  //         //如果为空，就去观战；否则删除
  //         mergeMap((isEmpty: boolean) => {
  //           const {
  //             _id,
  //             fileInfo: [{ filepath }],
  //           } = data as Game;
  //           //有滞后的对局，需要删除
  //           if (!isEmpty) {
  //             return forkJoin([
  //               from(SpectateClientService.rmdir(filepath)),
  //               from(this.deleteLagDbGame(_id)),
  //             ]);
  //           }
  //           return of(null);
  //         }),
  //         //重置一下，准备过滤出可下载的对局
  //         map(() => data),
  //         filter((game:DocumentType<Game>) => !SpectateClientService.isLagGame(game)),
  //         mergeMap((game: DocumentType<Game>) => {
  //           const {
  //             _id,
  //             fileInfo:[{_id: fileInfo_id, nextChunkId, filepath}],
  //           } = game;
  //           return of(666));
  //         },
  //       ),
  //     ),
  //     toArray(),
  //     tap((v) => {
  //       console.log(v);
  //     }),
  //   );
  //   from(this.GameModel.find({ 'gameInfo.gamePending': true })).pipe(
  //     filter((data) => data !== null),
  //     map((data) => JSON.parse(JSON.stringify(data))),
  //     mergeMap(
  //       //数据库数据
  //       (games) =>
  //         from(games as Game[])
  //           .pipe
  //           //单条game
  //           //删除 过时的对局
  //           (),
  //     ),
  //   );
  // }

  create(createSpectateClientDto: CreateSpectateClientDto) {
    return 'This action adds a new spectateClient';
  }

  findAll() {
    return `This action returns all spectateClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spectateClient`;
  }

  update(id: number, updateSpectateClientDto: UpdateSpectateClientDto) {
    return `This action updates a #${id} spectateClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} spectateClient`;
  }
}
