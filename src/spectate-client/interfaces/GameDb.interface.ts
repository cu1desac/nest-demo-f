// 此interface目的是 spectate-client.service.ts 里 SpectateClientService.formGameDto 返回的类型，后续可替换为 详细声明了gameInfo、fileInfo、detail的数据库模型
export interface GameDb {
  _id?: GameDb_id;
  gameInfo: GameDbGameInfo;
  fileInfo: GameDbFileInfo[];
  __v?: number;
}
export interface GameDb_id {
  $oid: string;
}
export interface GameDbGameInfoGameId {
  $numberLong: string;
}
export interface GameDbGameInfoGameStartTime {
  $numberLong: string;
}
export interface GameDbGameInfo {
  gameId?: string;
  platformId?: string;
  encryptionKey?: string;
  gameStartTime?: string;
  gamePending?: boolean;
  endChunkId?: number;
  endFrameId?: number;
  startChunkId?: number;
  startFrameId?: number;
  gameVersion?: number;
}
export interface GameDbFileInfoCreatTime {
  $numberLong: string;
}
export interface GameDbFileInfo_id {
  $oid: string;
}
export interface GameDbFileInfo {
  storageType: string;
  storageNote: string;
  filepath: string;
  nextChunkId: number;
  nextFrameId: number;
  creatTime: string;
  _id?: GameDbFileInfo_id;
}
