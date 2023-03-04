export interface Summoner {
  type: string;
  version: string;
  data: Data;
}

interface Data {
  SummonerBarrier: SummonerBarrier;
  SummonerBoost: SummonerBarrier;
  SummonerDot: SummonerBarrier;
  SummonerExhaust: SummonerBarrier;
  SummonerFlash: SummonerBarrier;
  SummonerHaste: SummonerBarrier;
  SummonerHeal: SummonerBarrier;
  SummonerMana: SummonerBarrier;
  SummonerPoroRecall: SummonerBarrier;
  SummonerPoroThrow: SummonerBarrier;
  SummonerSmite: SummonerBarrier;
  SummonerSnowURFSnowball_Mark: SummonerBarrier;
  SummonerSnowball: SummonerBarrier;
  SummonerTeleport: SummonerBarrier;
  Summoner_UltBookPlaceholder: SummonerBarrier;
  Summoner_UltBookSmitePlaceholder: SummonerBarrier;
}

interface SummonerBarrier {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, never>;
  effect: (number[] | null)[];
  effectBurn: (null | string)[];
  vars: any[];
  key: string;
  summonerLevel: number;
  modes: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
