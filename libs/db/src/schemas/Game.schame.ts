import { mongoose, Prop, PropType, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';

class GameInfo {
  @Prop()
  gameId: number;
  @Prop()
  platformId: string;
  @Prop()
  matchId: string;
  @Prop()
  startChunkId: number;
  @Prop()
  startFrameId: number;
  @Prop()
  endChunkId: number;
  @Prop()
  endFrameId: number;
  @Prop()
  encryptionKey: string;
  @Prop()
  gameStartTime: number;
  @Prop()
  gamePending: boolean;
  @Prop()
  gameDetails: string;
  @Prop()
  gameVersion: number;
  @Prop()
  gameTier: string;
}

class FileInfo {
  @Prop()
  storageType?: string;
  @Prop()
  storageNote?: string;
  @Prop()
  filepath?: string;
  @Prop()
  endChunkId?: number;
  @Prop()
  endFrameId?: number;
  @Prop()
  nextChunkId?: number;
  @Prop()
  nextFrameId?: number;
  @Prop()
  nextChunkTime?: number;
  @Prop()
  nextFrameTime?: number;
  @Prop()
  creatTime?: number;
}

export class Game {
  @Prop({ type: () => GameInfo })
  gameInfo?: GameInfo;
  @Prop({ type: () => [FileInfo] })
  fileInfo: mongoose.Types.Array<FileInfo>;
  @Prop({ allowMixed: 0 })
  keyFrame?: any;
  @Prop({ allowMixed: 0 })
  detail?: any;
}
