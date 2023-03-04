export interface SimpleInformation {
  durationMinuter: number;
  gameMode: string;
  totalKills: number;
  data: string;
}
export interface Champion {
  championAvatarUrl: string;
  championLevel: number;
}
export interface Spell {
  spellId: string;
  spellImgUrl: string;
  forKey: string;
}
export interface Perk {
  primaryPerkUrl: string;
  secondaryPerkUrl: string;
}
export interface Summoner {
  summonerName: string;
  summonerLevel: number;
  // 段位
  summonerStage: string;
}
export interface KDA {
  kdaDetail: string;
  kdaNumber: number;
}
export interface Item {
  itemUrls: string[];
}
export interface Millions {
  totalMinionsKilled: number;
  pureMinionKilled: number;
}
export interface DetailedInformation {
  champion: Champion;
  spell: Spell[];
  perk: Perk;
  summoner: Summoner;
  KDA: KDA;
  item: Item;
  millions: Millions;
  win: boolean;
}
export interface MatchVue {
  simpleInformation: SimpleInformation;
  detailedInformation: DetailedInformation[];
}
