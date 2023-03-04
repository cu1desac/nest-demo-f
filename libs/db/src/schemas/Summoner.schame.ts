import { mongoose, Prop } from '@typegoose/typegoose';
class League {
  @Prop()
  leagueId: string;
  @Prop()
  queueType: string;
  @Prop()
  tier: string;
  @Prop()
  rank: string;
  @Prop()
  leaguePoints: number;
  @Prop()
  wins: number;
  @Prop()
  losses: number;
  @Prop()
  veteran: boolean;
  @Prop()
  inactive: boolean;
  @Prop()
  freshBlood: boolean;
  @Prop()
  hotStreak: boolean;
}
class Rank {
  @Prop()
  leagueId: string;
  @Prop()
  queueType: string;
  @Prop()
  tier: string;
  @Prop()
  rank: string;
  @Prop()
  leaguePoints: number;
  @Prop()
  wins: number;
  @Prop()
  losses: number;
  @Prop()
  veteran: boolean;
  @Prop()
  inactive: boolean;
  @Prop()
  freshBlood: boolean;
  @Prop()
  hotStreak: boolean;
}
class Match {
  @Prop()
  matchId: string;
  @Prop()
  queue: number;
  @Prop()
  kda: number;
  @Prop()
  gameEndTimestamp: number;
}
export class Summoner {
  @Prop()
  platformId: string;
  @Prop()
  accountId: string;
  @Prop()
  profileIconId: number;
  @Prop()
  revisionDate: number;
  @Prop()
  summonerName: string;
  @Prop()
  summonerId: string;
  @Prop()
  puuid: string;
  @Prop()
  summonerLevel: number;
  @Prop()
  lastGameDate: number;
  @Prop({ type: () => [League] })
  league: mongoose.Types.Array<League>;
  @Prop({ type: () => [Match] })
  matches: mongoose.Types.Array<Match>;
  @Prop()
  kda: number;
  @Prop({ type: () => Rank })
  rankedSolo: Rank;
  @Prop({ type: () => Rank })
  rankedFlex: Rank;
}
