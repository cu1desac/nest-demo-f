export type Amount = {
  amount: number;
};

export interface _id {
  $oid: string;
}

export interface GameInfo {
  gameId: number;
  platformId: string;
  encryptionKey: string;
  gameStartTime: number;
  gamePending: boolean;
  endChunkId: number;
  endFrameId: number;
  startChunkId: number;
  startFrameId: number;
  gameVersion: number;
}

export interface _id {
  $oid: string;
}

export interface FileInfo {
  storageType: string;
  storageNote: string;
  filepath: string;
  nextChunkId: number;
  nextFrameId: number;
  creatTime: number;
  _id: _id;
}

export interface _id {
  $oid: string;
}

export interface KeyFrame {
  time: string;
  desc: string;
  _id: _id;
}

export interface Metadata {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

export interface Challenge {
  avoidTSError_12AssistStreakCount: number;
  abilityUses: number;
  acesBefore15Minutes: number;
  alliedJungleMonsterKills: number;
  baronTakedowns: number;
  blastConeOppositeOpponentCount: number;
  bountyGold: number;
  buffsStolen: number;
  completeSupportQuestInTime: number;
  controlWardsPlaced: number;
  damagePerMinute: number;
  damageTakenOnTeamPercentage: number;
  dancedWithRiftHerald: number;
  deathsByEnemyChamps: number;
  dodgeSkillShotsSmallWindow: number;
  doubleAces: number;
  dragonTakedowns: number;
  earliestDragonTakedown: number;
  earlyLaningPhaseGoldExpAdvantage: number;
  effectiveHealAndShielding: number;
  elderDragonKillsWithOpposingSoul: number;
  elderDragonMultikills: number;
  enemyChampionImmobilizations: number;
  enemyJungleMonsterKills: number;
  epicMonsterKillsNearEnemyJungler: number;
  epicMonsterKillsWithin30SecondsOfSpawn: number;
  epicMonsterSteals: number;
  epicMonsterStolenWithoutSmite: number;
  flawlessAces: number;
  fullTeamTakedown: number;
  gameLength: number;
  getTakedownsInAllLanesEarlyJungleAsLaner: number;
  goldPerMinute: number;
  hadOpenNexus: number;
  immobilizeAndKillWithAlly: number;
  initialBuffCount: number;
  initialCrabCount: number;
  jungleCsBefore10Minutes: number;
  junglerTakedownsNearDamagedEpicMonster: number;
  kTurretsDestroyedBeforePlatesFall: number;
  kda: number;
  killAfterHiddenWithAlly: number;
  killParticipation: number;
  killedChampTookFullTeamDamageSurvived: number;
  killsNearEnemyTurret: number;
  killsOnOtherLanesEarlyJungleAsLaner: number;
  killsOnRecentlyHealedByAramPack: number;
  killsUnderOwnTurret: number;
  killsWithHelpFromEpicMonster: number;
  knockEnemyIntoTeamAndKill: number;
  landSkillShotsEarlyGame: number;
  laneMinionsFirst10Minutes: number;
  laningPhaseGoldExpAdvantage: number;
  legendaryCount: number;
  lostAnInhibitor: number;
  maxCsAdvantageOnLaneOpponent: number;
  maxKillDeficit: number;
  maxLevelLeadLaneOpponent: number;
  moreEnemyJungleThanOpponent: number;
  multiKillOneSpell: number;
  multiTurretRiftHeraldCount: number;
  multikills: number;
  multikillsAfterAggressiveFlash: number;
  mythicItemUsed: number;
  outerTurretExecutesBefore10Minutes: number;
  outnumberedKills: number;
  outnumberedNexusKill: number;
  perfectDragonSoulsTaken: number;
  perfectGame: number;
  pickKillWithAlly: number;
  playedChampSelectPosition: number;
  poroExplosions: number;
  quickCleanse: number;
  quickFirstTurret: number;
  quickSoloKills: number;
  riftHeraldTakedowns: number;
  saveAllyFromDeath: number;
  scuttleCrabKills: number;
  skillshotsDodged: number;
  skillshotsHit: number;
  snowballsHit: number;
  soloBaronKills: number;
  soloKills: number;
  stealthWardsPlaced: number;
  survivedSingleDigitHpCount: number;
  survivedThreeImmobilizesInFight: number;
  takedownOnFirstTurret: number;
  takedowns: number;
  takedownsAfterGainingLevelAdvantage: number;
  takedownsBeforeJungleMinionSpawn: number;
  takedownsFirstXMinutes: number;
  takedownsInAlcove: number;
  takedownsInEnemyFountain: number;
  teamBaronKills: number;
  teamDamagePercentage: number;
  teamElderDragonKills: number;
  teamRiftHeraldKills: number;
  threeWardsOneSweeperCount: number;
  tookLargeDamageSurvived: number;
  turretPlatesTaken: number;
  turretTakedowns: number;
  turretsTakenWithRiftHerald: number;
  twentyMinionsIn3SecondsCount: number;
  unseenRecalls: number;
  visionScoreAdvantageLaneOpponent: number;
  visionScorePerMinute: number;
  wardTakedowns: number;
  wardTakedownsBefore20M: number;
  wardsGuarded: number;
}

export interface StatPerk {
  defense: number;
  flex: number;
  offense: number;
}

export interface Selection {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface Style {
  description: string;
  selections: Selection[];
  style: number;
}

export interface Perk {
  statPerks: StatPerk;
  styles: Style[];
}

export interface Participant {
  assists: number;
  baronKills: number;
  basicPings: number;
  bountyLevel: number;
  challenges: Challenge;
  champExperience: number;
  champLevel: number;
  championId: number;
  championName: string;
  championTransform: number;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  eligibleForProgression: boolean;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  individualPosition: string;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusLost: number;
  nexusTakedowns: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  participantId: number;
  pentaKills: number;
  perks: Perk;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  timePlayed: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

export interface Ban {
  championId: number;
  pickTurn: number;
}

export interface Baron {
  first: boolean;
  kills: number;
}

export interface Champion {
  first: boolean;
  kills: number;
}

export interface Dragon {
  first: boolean;
  kills: number;
}

export interface Inhibitor {
  first: boolean;
  kills: number;
}

export interface RiftHerald {
  first: boolean;
  kills: number;
}

export interface Tower {
  first: boolean;
  kills: number;
}

export interface Objective {
  baron: Baron;
  champion: Champion;
  dragon: Dragon;
  inhibitor: Inhibitor;
  riftHerald: RiftHerald;
  tower: Tower;
}

export interface Team {
  bans: Ban[];
  objectives: Objective;
  teamId: number;
  win: boolean;
}

export interface Info {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: Participant[];
  platformId: string;
  queueId: number;
  teams: Team[];
  tournamentCode: string;
}

export interface Detail {
  metadata: Metadata;
  info: Info;
}

export interface MatchMongo {
  _id: _id;
  gameInfo: GameInfo;
  fileInfo: FileInfo[];
  __v: number;
  keyFrame: KeyFrame[];
  detail: Detail;
}
