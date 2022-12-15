export interface ActiveGameInfo {
  gameId: string;
  mapId: number;
  gameMode: string;
  gameType: string;
  gameQueueConfigId: number;
  participants: ActiveGameInfoParticipants[];
  observers: ActiveGameInfoObservers;
  platformId: string;
  bannedChampions: ActiveGameInfoBannedChampions[];
  gameStartTime: string;
  gameLength: number;
}
export interface ActiveGameInfoParticipantsPerks {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
}
export interface ActiveGameInfoParticipants {
  teamId: number;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  profileIconId: number;
  summonerName: string;
  bot: boolean;
  summonerId: string;
  gameCustomizationObjects: any[];
  perks: ActiveGameInfoParticipantsPerks;
}
export interface ActiveGameInfoObservers {
  encryptionKey: string;
}
export interface ActiveGameInfoBannedChampions {
  championId: number;
  teamId: number;
  pickTurn: number;
}
