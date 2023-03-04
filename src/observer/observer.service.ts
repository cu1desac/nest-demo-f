import { Inject, Injectable, StreamableFile } from '@nestjs/common';
import { User } from '@app/db/schemas/User.schame';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { Game } from '@app/db/schemas/Game.schame';
import { promises as fsp, createReadStream } from 'fs';
import { join } from 'path';
import stream from 'node:stream';

@Injectable()
export class ObserverService {
  constructor(
    @Inject(User.name) private readonly UserModel: ReturnModelType<typeof User>,
    @Inject(Game.name) private readonly GameModel: ReturnModelType<typeof Game>,
  ) {}
  //platform和gameId返回 gameInfo, fileInfo
  private async queryGame(
    platformId: string,
    gameId: string,
  ): Promise<DocumentType<Game>> {
    return (await this.GameModel.findOne(
      {
        'gameInfo.platformId': platformId.toUpperCase(),
        'gameInfo.gameId': gameId,
      },
      ['gameInfo', 'fileInfo'],
    )
      .exec()
      .then((data) => {
        if (data === null) throw 'no game in db';
        return data;
      })) as DocumentType<Game>;
  }
  //根据IP查询user
  private async queryUser(ip: string): Promise<DocumentType<User>> {
    return this.UserModel.findOne({ ip })
      .exec()
      .then((user) => {
        if (!user) throw 'no user';
        return user;
      });
  }
  public async getGameMetaData(platformId, gameId, randomSign, ip) {
    //从数据库取出game信息
    const game = await this.queryGame(platformId, gameId);
    const {
      gameInfo: { startChunkId, startFrameId, endChunkId, endFrameId },
      fileInfo: [{ filepath }],
    } = game;
    //查询User集合是否有此记录，有，更新，没有，插入
    const user = (await this.UserModel.findOne({
      ip,
    }).exec()) as DocumentType<User>;
    //插入新纪录
    if (!user) {
      const newUser = {
        ip,
        gameId,
        platformId,
        startChunkId,
        startFrameId,
        endChunkId,
        endFrameId,
        filepath,
        nextChunkId: startChunkId,
        nextFrameId: startFrameId,
      } as User;
      await this.UserModel.create(newUser);
    }
    //更新记录
    if (user) {
      const userNewData = {
        gameId,
        platformId,
        startChunkId,
        startFrameId,
        endChunkId,
        endFrameId,
        filepath,
        nextChunkId: startChunkId,
        nextFrameId: startFrameId,
      } as User;
      await this.UserModel.findByIdAndUpdate(user._id, userNewData).exec();
    }
    //返回数据
    return {
      gameKey: {
        gameId,
        platformId,
      },
      gameServerAddress: '',
      port: 0,
      encryptionKey: '',
      chunkTimeInterval: 3000,
      gameEnded: false,
      lastChunkId: endChunkId,
      lastKeyFrameId: endFrameId,
      endStartupChunkId: 1,
      delayTime: 150000,
      startGameChunkId: startChunkId,
      keyFrameTimeInterval: 6000,
      endGameChunkId: -1,
      endGamekeyFrameId: -1,
      decodedEncryptionKey: '',
      featuredGame: false,
      gameLength: 0,
      clientAddedLag: 3000,
      clientBackFetchingEnabled: false,
      clientBackFetchingFreq: 1000,
    };
  }
  public async getLastChunkInfo(
    platformId: string,
    gameId: string,
    ip: string,
  ) {
    console.log('lastChunkInfo');
    const { nextChunkId, nextFrameId, endChunkId, startChunkId } =
      await this.queryUser(ip);
    // let keyFrameId = 1;
    // if (nextChunkId / 2 >= 1) {
    //   keyFrameId = nextChunkId / 2;
    // }
    return {
      chunkId: nextChunkId,
      availableSince: 100,
      nextAvailableChunk: 1000,
      keyFrameId: nextFrameId,
      nextChunkId: nextChunkId,
      endStartupChunkId: 1,
      startGameChunkId: startChunkId,
      endGameChunkId: endChunkId,
      duration: 30000,
    };
  }
  //
  public async getGameDataChunk(
    platformId: string,
    gameId: string,
    chunkId: number,
    ip: string,
  ): Promise<StreamableFile> {
    const { _id, filepath, nextChunkId, endChunkId } = await this.queryUser(ip);
    //是否有此文件
    await fsp
      .access(filepath)
      .catch(() => Promise.reject(`no such file ${filepath}`));
    //更新数据库
    await this.UserModel.findByIdAndUpdate(_id, {
      nextChunkId: nextChunkId + 1 <= endChunkId ? nextChunkId + 1 : endChunkId,
    });
    const file = createReadStream(join(filepath, `${chunkId}gameDataChunk`));
    return new StreamableFile(file);
  }
  public async getKeyFrame(
    platformId: string,
    gameId: string,
    frameId: number,
    ip: string,
  ) {
    const { _id, filepath, nextFrameId, endFrameId } = await this.queryUser(ip);
    //是否有此文件
    await fsp
      .access(filepath)
      .catch(() => Promise.reject(`no such file ${filepath}`));
    //更新数据库
    await this.UserModel.findByIdAndUpdate(_id, {
      nextFrameId: nextFrameId + 1 <= endFrameId ? nextFrameId + 1 : endFrameId,
    });
    const file = createReadStream(join(filepath, `${frameId}keyFrame`));
    return new StreamableFile(file);
  }
}
