import { Prop } from '@typegoose/typegoose';

export class User {
  @Prop()
  ip: string;
  @Prop()
  gameId: number;
  @Prop()
  platformId: string;
  @Prop()
  filepath: string;
  @Prop()
  startChunkId: number;
  @Prop()
  startFrameId: number;
  @Prop()
  endChunkId: number;
  @Prop()
  endFrameId: number;
  @Prop()
  nextChunkId: number;
  @Prop()
  nextFrameId: number;
}
