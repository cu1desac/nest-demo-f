import { extend } from 'dayjs';

export interface Item {
  type: string;
  version: string;
  basic: Basic;
  data: Data;
  groups: Group[];
  tree: Tree[];
}

interface Tree {
  header: string;
  tags: string[];
}

interface Group {
  id: string;
  MaxGroupOwnable: string;
}

interface Data {
  '1001': _1001;
  '1004': _1004;
  '1006': _1004;
  '1011': _1011;
  '1018': _1018;
  '1026': _1026;
  '1027': _1027;
  '1028': _1028;
  '1029': _1029;
  '1031': _1031;
  '1033': _1033;
  '1035': _1035;
  '1036': _1036;
  '1037': _1036;
  '1038': _1036;
  '1039': _1035;
  '1040': _1040;
  '1042': _1042;
  '1043': _1043;
  '1052': _1026;
  '1053': _1053;
  '1054': _1054;
  '1055': _1055;
  '1056': _1056;
  '1057': _1057;
  '1058': _1026;
  '1082': _1082;
  '1083': _1083;
  '1101': _1040;
  '1102': _1040;
  '1103': _1040;
  '1104': _1104;
  '1500': _1035;
  '1501': _1501;
  '1502': _1502;
  '1503': _1502;
  '1504': _1035;
  '1505': _1505;
  '1506': _1506;
  '1507': _1506;
  '1508': _1505;
  '1509': _1505;
  '1510': _1505;
  '1511': _1505;
  '1512': _1505;
  '1515': _1515;
  '1516': _1035;
  '1517': _1035;
  '1518': _1035;
  '1519': _1035;
  '1520': _1506;
  '2003': _2003;
  '2010': _2010;
  '2015': _1043;
  '2031': _1004;
  '2033': _2033;
  '2051': _2051;
  '2052': _2052;
  '2055': _2055;
  '2065': _2065;
  '2138': _2138;
  '2139': _2138;
  '2140': _2138;
  '2403': _2403;
  '2419': _2419;
  '2420': _2420;
  '2421': _2421;
  '2422': _2422;
  '2423': _2423;
  '2424': _2424;
  '3001': _3001;
  '3003': _3003;
  '3004': _3004;
  '3006': _3006;
  '3009': _3009;
  '3011': _3011;
  '3020': _3009;
  '3024': _3024;
  '3026': _3026;
  '3031': _3031;
  '3033': _3031;
  '3035': _3035;
  '3036': _3036;
  '3040': _3040;
  '3041': _3041;
  '3042': _3042;
  '3044': _3044;
  '3046': _3046;
  '3047': _3047;
  '3050': _3050;
  '3051': _3051;
  '3053': _3053;
  '3057': _1004;
  '3065': _3065;
  '3066': _1011;
  '3067': _1011;
  '3068': _3068;
  '3070': _1027;
  '3071': _3071;
  '3072': _3072;
  '3074': _3074;
  '3075': _3068;
  '3076': _1031;
  '3077': _3035;
  '3078': _3078;
  '3082': _1031;
  '3083': _3053;
  '3084': _1011;
  '3085': _3085;
  '3086': _3086;
  '3089': _3011;
  '3091': _3091;
  '3094': _3094;
  '3095': _3095;
  '3100': _3100;
  '3102': _3102;
  '3105': _3105;
  '3107': _3053;
  '3108': _3108;
  '3109': _3053;
  '3110': _3110;
  '3111': _3111;
  '3112': _3112;
  '3113': _3113;
  '3114': _3114;
  '3115': _3115;
  '3116': _3116;
  '3117': _3117;
  '3119': _3119;
  '3121': _3121;
  '3123': _3123;
  '3124': _3124;
  '3133': _3133;
  '3134': _3134;
  '3135': _3011;
  '3139': _3139;
  '3140': _1057;
  '3142': _3142;
  '3143': _3068;
  '3145': _2065;
  '3152': _2065;
  '3153': _3153;
  '3155': _3155;
  '3156': _3156;
  '3157': _3157;
  '3158': _3158;
  '3161': _3161;
  '3165': _3041;
  '3177': _3177;
  '3179': _3179;
  '3181': _3161;
  '3184': _3184;
  '3190': _3001;
  '3191': _3191;
  '3193': _3193;
  '3211': _3211;
  '3222': _3222;
  '3330': _3330;
  '3340': _3340;
  '3363': _3363;
  '3364': _3364;
  '3400': _3400;
  '3504': _3011;
  '3508': _3031;
  '3513': _1104;
  '3599': _3599;
  '3600': _3599;
  '3742': _3742;
  '3748': _3071;
  '3801': _1011;
  '3802': _3802;
  '3803': _3803;
  '3814': _3814;
  '3850': _3850;
  '3851': _3851;
  '3853': _3853;
  '3854': _3854;
  '3855': _3855;
  '3857': _3857;
  '3858': _3858;
  '3859': _3859;
  '3860': _3853;
  '3862': _3862;
  '3863': _3863;
  '3864': _3857;
  '3901': _3901;
  '3902': _3901;
  '3903': _3901;
  '3916': _3916;
  '4005': _2065;
  '4401': _4401;
  '4403': _4403;
  '4628': _3041;
  '4629': _4629;
  '4630': _3113;
  '4632': _4632;
  '4633': _2065;
  '4635': _2065;
  '4636': _2065;
  '4637': _3041;
  '4638': _4638;
  '4641': _4641;
  '4642': _3113;
  '4643': _4643;
  '4644': _4644;
  '4645': _3041;
  '6029': _3035;
  '6035': _6035;
  '6333': _6333;
  '6609': _3161;
  '6616': _3011;
  '6617': _2065;
  '6630': _6630;
  '6631': _3078;
  '6632': _6630;
  '6653': _3802;
  '6655': _3802;
  '6656': _4644;
  '6657': _4644;
  '6660': _1011;
  '6662': _6662;
  '6664': _3065;
  '6665': _3001;
  '6667': _3001;
  '6670': _6670;
  '6671': _6671;
  '6672': _6671;
  '6673': _6673;
  '6675': _6675;
  '6676': _3031;
  '6677': _1043;
  '6691': _3035;
  '6692': _3035;
  '6693': _3035;
  '6694': _6694;
  '6695': _6694;
  '6696': _6694;
  '7000': _7000;
  '7001': _7000;
  '7002': _7000;
  '7005': _7005;
  '7006': _7006;
  '7007': _7006;
  '7008': _7008;
  '7009': _7009;
  '7010': _7009;
  '7011': _7009;
  '7012': _7012;
  '7013': _7012;
  '7014': _7014;
  '7015': _7015;
  '7016': _7016;
  '7017': _7015;
  '7018': _7016;
  '7019': _7019;
  '7020': _7009;
  '7021': _7009;
  '7022': _7009;
  '7023': _7023;
  '7024': _7014;
  '7025': _7025;
  '7026': _7019;
  '7027': _7023;
  '7028': _7028;
  '7050': _7050;
  '8001': _3053;
  '8020': _8020;
}

interface _8020 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats53;
  depth: number;
}

interface Stats53 {
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
  FlatMPPoolMod: number;
}

interface _7050 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  consumeOnFull: boolean;
  inStore: boolean;
  requiredChampion: string;
  hideFromAll: boolean;
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
}

interface _7028 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats17;
  depth: number;
}

interface _7025 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
  depth: number;
}

interface _7023 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats16;
  depth: number;
}

interface _7019 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats16;
  depth: number;
}

interface _7016 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats30;
  effect: Effect5;
  depth: number;
}

interface _7015 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  depth: number;
}

interface _7014 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats17;
  depth: number;
}

interface _7012 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats47;
  depth: number;
}

interface _7009 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  depth: number;
}

interface _7008 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats52;
  depth: number;
}

interface _7006 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats34;
  depth: number;
}

interface _7005 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats28;
  depth: number;
}

interface _7000 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  requiredAlly: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  depth: number;
}

interface _6694 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  depth: number;
}

interface _6675 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats22;
  effect: Effect2;
  depth: number;
}

interface _6673 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats52;
  depth: number;
}

interface Stats52 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  PercentAttackSpeedMod: number;
  PercentLifeStealMod: number;
}

interface _6671 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats34;
  depth: number;
}

interface _6670 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats26;
  depth: number;
}

interface _6662 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats28;
  depth: number;
}

interface _6630 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  depth: number;
}

interface _6333 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats21;
  depth: number;
}

interface _6035 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats51;
  effect: Effect2;
  depth: number;
}

interface Stats51 {
  FlatPhysicalDamageMod: number;
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
}

interface _4644 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats17;
  depth: number;
}

interface _4643 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
  depth: number;
}

interface _4641 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  consumeOnFull: boolean;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
}

interface _4638 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  consumeOnFull: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
}

interface _4632 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats36;
  depth: number;
}

interface _4629 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats50;
  depth: number;
}

interface Stats50 {
  PercentMovementSpeedMod: number;
  FlatHPPoolMod: number;
  FlatMagicDamageMod: number;
}

interface _4403 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats49;
  depth: number;
}

interface Stats49 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  PercentMovementSpeedMod: number;
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
  FlatMPPoolMod: number;
  FlatMagicDamageMod: number;
  FlatArmorMod: number;
  PercentAttackSpeedMod: number;
  PercentLifeStealMod: number;
}

interface _4401 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats48;
  depth: number;
}

interface Stats48 {
  PercentMovementSpeedMod: number;
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
}

interface _3916 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats6;
  depth: number;
}

interface _3901 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  consumeOnFull: boolean;
  inStore: boolean;
  requiredChampion: string;
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
}

interface _3863 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect13;
}

interface _3862 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect13;
}

interface _3859 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect9;
}

interface _3858 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect9;
}

interface _3857 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect3;
}

interface _3855 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect9;
}

interface _3854 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect9;
}

interface _3853 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect3;
}

interface _3851 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect13;
}

interface _3850 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect13;
}

interface Effect13 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
}

interface _3814 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect;
  depth: number;
}

interface _3803 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats40;
  depth: number;
}

interface _3802 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats47;
  depth: number;
}

interface Stats47 {
  FlatMPPoolMod: number;
  FlatMagicDamageMod: number;
}

interface _3742 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats46;
  depth: number;
}

interface Stats46 {
  PercentMovementSpeedMod: number;
  FlatHPPoolMod: number;
  FlatArmorMod: number;
}

interface _3599 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  requiredChampion: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _3400 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  inStore: boolean;
  hideFromAll: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _3364 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect12;
}

interface Effect12 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
}

interface _3363 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect11;
}

interface Effect11 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
  Effect10Amount: string;
  Effect11Amount: string;
  Effect12Amount: string;
  Effect13Amount: string;
  Effect14Amount: string;
  Effect15Amount: string;
}

interface _3340 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect6;
}

interface _3330 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  requiredChampion: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect6;
}

interface _3222 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats9;
  depth: number;
}

interface _3211 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats27;
  depth: number;
}

interface _3193 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats37;
  depth: number;
}

interface _3191 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats44;
  effect: Effect4;
  depth: number;
}

interface _3184 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats45;
}

interface Stats45 {
  FlatPhysicalDamageMod: number;
  FlatHPPoolMod: number;
  PercentLifeStealMod: number;
}

interface _3179 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  effect: Effect2;
  depth: number;
}

interface _3177 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect3;
}

interface _3161 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  depth: number;
}

interface _3158 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats2;
  depth: number;
}

interface _3157 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats44;
  effect: Effect2;
  depth: number;
}

interface Stats44 {
  FlatMagicDamageMod: number;
  FlatArmorMod: number;
}

interface _3156 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats43;
  depth: number;
}

interface _3155 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats43;
  depth: number;
}

interface Stats43 {
  FlatPhysicalDamageMod: number;
  FlatSpellBlockMod: number;
}

interface _3153 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats42;
  depth: number;
}

interface Stats42 {
  FlatPhysicalDamageMod: number;
  PercentAttackSpeedMod: number;
  PercentLifeStealMod: number;
}

interface _3142 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  effect: Effect9;
  depth: number;
}

interface _3139 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats41;
  effect: Effect2;
  depth: number;
}

interface Stats41 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  FlatSpellBlockMod: number;
}

interface _3134 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  effect: Effect3;
  depth: number;
}

interface _3133 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  depth: number;
}

interface _3124 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats32;
  effect: Effect10;
  depth: number;
}

interface Effect10 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
  Effect10Amount: string;
  Effect11Amount: string;
  Effect12Amount: string;
  Effect13Amount: string;
}

interface _3123 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  effect: Effect3;
  depth: number;
}

interface _3121 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats40;
}

interface _3119 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats40;
  depth: number;
}

interface Stats40 {
  FlatHPPoolMod: number;
  FlatMPPoolMod: number;
}

interface _3117 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats2;
  effect: Effect6;
  depth: number;
}

interface _3116 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect9;
  depth: number;
}

interface _3115 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats39;
  depth: number;
}

interface Stats39 {
  FlatMagicDamageMod: number;
  PercentAttackSpeedMod: number;
}

interface _3114 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  depth: number;
}

interface _3113 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats6;
  depth: number;
}

interface _3112 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  effect: Effect3;
}

interface _3111 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats38;
  depth: number;
}

interface Stats38 {
  FlatMovementSpeedMod: number;
  FlatSpellBlockMod: number;
}

interface _3110 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats20;
  depth: number;
}

interface _3108 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats6;
  effect: Effect3;
  depth: number;
}

interface _3105 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats37;
  depth: number;
}

interface Stats37 {
  FlatSpellBlockMod: number;
  FlatArmorMod: number;
}

interface _3102 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats36;
  effect: Effect9;
  depth: number;
}

interface Stats36 {
  FlatSpellBlockMod: number;
  FlatMagicDamageMod: number;
}

interface _3100 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats35;
  depth: number;
}

interface Stats35 {
  PercentMovementSpeedMod: number;
  FlatMagicDamageMod: number;
}

interface _3095 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats34;
  effect: Effect9;
  depth: number;
}

interface Stats34 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  PercentAttackSpeedMod: number;
}

interface _3094 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats31;
  depth: number;
}

interface _3091 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats33;
  depth: number;
}

interface Stats33 {
  FlatPhysicalDamageMod: number;
  FlatSpellBlockMod: number;
  PercentAttackSpeedMod: number;
}

interface _3086 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats32;
  effect: Effect3;
  depth: number;
}

interface Stats32 {
  FlatCritChanceMod: number;
  PercentAttackSpeedMod: number;
}

interface _3085 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats31;
  effect: Effect9;
  depth: number;
}

interface Effect9 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
}

interface Stats31 {
  FlatCritChanceMod: number;
  PercentMovementSpeedMod: number;
  PercentAttackSpeedMod: number;
}

interface _3078 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats30;
  effect: Effect5;
  depth: number;
}

interface Stats30 {
  FlatPhysicalDamageMod: number;
  FlatHPPoolMod: number;
  PercentAttackSpeedMod: number;
}

interface _3074 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats12;
  depth: number;
}

interface _3072 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats29;
  depth: number;
}

interface Stats29 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  PercentLifeStealMod: number;
}

interface _3071 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect8;
  depth: number;
}

interface Effect8 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
  Effect10Amount: string;
}

interface _3068 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats28;
  depth: number;
}

interface Stats28 {
  FlatHPPoolMod: number;
  FlatArmorMod: number;
}

interface _3065 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats27;
  depth: number;
}

interface Stats27 {
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
}

interface _3053 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
  depth: number;
}

interface _3051 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats26;
  effect: Effect2;
  depth: number;
}

interface Stats26 {
  FlatPhysicalDamageMod: number;
  PercentAttackSpeedMod: number;
}

interface _3050 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats25;
  depth: number;
}

interface Stats25 {
  FlatHPPoolMod: number;
  FlatMPPoolMod: number;
  FlatArmorMod: number;
}

interface _3047 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats24;
  effect: Effect3;
  depth: number;
}

interface Stats24 {
  FlatMovementSpeedMod: number;
  FlatArmorMod: number;
}

interface _3046 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats23;
  effect: Effect7;
  depth: number;
}

interface Effect7 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
  Effect10Amount: string;
  Effect11Amount: string;
  Effect12Amount: string;
  Effect13Amount: string;
  Effect14Amount: string;
  Effect15Amount: string;
  Effect16Amount: string;
  Effect17Amount: string;
  Effect18Amount: string;
}

interface Stats23 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
  PercentMovementSpeedMod: number;
  PercentAttackSpeedMod: number;
}

interface _3044 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
  effect: Effect6;
  depth: number;
}

interface _3042 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats18;
}

interface _3041 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  depth: number;
}

interface _3040 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats17;
}

interface _3036 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats22;
  effect: Effect3;
  depth: number;
}

interface _3035 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
  depth: number;
}

interface _3031 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats22;
  depth: number;
}

interface Stats22 {
  FlatPhysicalDamageMod: number;
  FlatCritChanceMod: number;
}

interface _3026 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats21;
  effect: Effect;
  depth: number;
}

interface Stats21 {
  FlatPhysicalDamageMod: number;
  FlatArmorMod: number;
}

interface _3024 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats20;
  depth: number;
}

interface Stats20 {
  FlatMPPoolMod: number;
  FlatArmorMod: number;
}

interface _3011 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats6;
  depth: number;
}

interface _3009 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats2;
  effect: Effect3;
  depth: number;
}

interface _3006 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats19;
  depth: number;
}

interface Stats19 {
  FlatMovementSpeedMod: number;
  PercentAttackSpeedMod: number;
}

interface _3004 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats18;
  depth: number;
}

interface Stats18 {
  FlatPhysicalDamageMod: number;
  FlatMPPoolMod: number;
}

interface _3003 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats17;
  depth: number;
}

interface Stats17 {
  FlatHPPoolMod: number;
  FlatMPPoolMod: number;
  FlatMagicDamageMod: number;
}

interface _3001 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats16;
  depth: number;
}

interface Stats16 {
  FlatHPPoolMod: number;
  FlatSpellBlockMod: number;
  FlatArmorMod: number;
}

interface _2424 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  hideFromAll: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect5;
}

interface _2423 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect4;
}

interface _2422 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats2;
}

interface _2421 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  hideFromAll: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect5;
}

interface _2420 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect4;
}

interface _2419 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _2403 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  inStore: boolean;
  hideFromAll: boolean;
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
}

interface _2138 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  consumeOnFull: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect6;
}

interface Effect6 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
}

interface _2065 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
  depth: number;
}

interface _2055 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  consumeOnFull: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect4;
}

interface _2052 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
}

interface _2051 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats13;
  effect: Effect4;
}

interface _2033 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  depth: number;
}

interface _2010 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  inStore: boolean;
  hideFromAll: boolean;
  image: Image;
  gold: Gold;
  tags: any[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect3;
}

interface _2003 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  stacks: number;
  consumed: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _1515 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect5;
}

interface Effect5 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
}

interface _1506 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect4;
}

interface Effect4 {
  Effect1Amount: string;
  Effect2Amount: string;
}

interface _1505 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _1502 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect3;
}

interface Effect3 {
  Effect1Amount: string;
}

interface _1501 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect2;
}

interface Effect2 {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
}

interface _1104 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect;
}

interface _1083 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
}

interface _1082 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
}

interface _1057 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats9;
  depth: number;
}

interface _1056 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats15;
}

interface Stats15 {
  FlatHPPoolMod: number;
  FlatMagicDamageMod: number;
}

interface _1055 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats14;
}

interface Stats14 {
  FlatPhysicalDamageMod: number;
  FlatHPPoolMod: number;
}

interface _1054 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats13;
  effect: Effect;
}

interface Stats13 {
  FlatHPPoolMod: number;
  FlatHPRegenMod: number;
}

interface _1053 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats12;
  depth: number;
}

interface Stats12 {
  FlatPhysicalDamageMod: number;
  PercentLifeStealMod: number;
}

interface _1043 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats11;
  depth: number;
}

interface _1042 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats11;
}

interface Stats11 {
  PercentAttackSpeedMod: number;
}

interface _1040 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect;
}

interface _1036 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats10;
}

interface Stats10 {
  FlatPhysicalDamageMod: number;
}

interface _1035 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  inStore: boolean;
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
  effect: Effect;
}

interface Effect {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
}

interface _1033 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats9;
}

interface Stats9 {
  FlatSpellBlockMod: number;
}

interface _1031 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats8;
  depth: number;
}

interface _1029 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats8;
}

interface Stats8 {
  FlatArmorMod: number;
}

interface _1028 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
}

interface _1027 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats7;
}

interface Stats7 {
  FlatMPPoolMod: number;
}

interface _1026 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats6;
}

interface Stats6 {
  FlatMagicDamageMod: number;
}

interface _1018 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats5;
}

interface Stats5 {
  FlatCritChanceMod: number;
}

interface _1011 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats4;
  depth: number;
}

interface Stats4 {
  FlatHPPoolMod: number;
}

interface _1004 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats3;
}

interface _1001 {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps2;
  stats: Stats2;
}

interface Stats2 {
  FlatMovementSpeedMod: number;
}

interface Maps2 {
  '11': boolean;
  '12': boolean;
  '21': boolean;
  '22': boolean;
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

interface Basic {
  name: string;
  rune: Rune;
  gold: Gold;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: any[];
  into: any[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: Stats;
  tags: any[];
  maps: Maps;
}

interface Maps {
  '1': boolean;
  '8': boolean;
  '10': boolean;
  '12': boolean;
}

interface Stats {
  FlatHPPoolMod: number;
  rFlatHPModPerLevel: number;
  FlatMPPoolMod: number;
  rFlatMPModPerLevel: number;
  PercentHPPoolMod: number;
  PercentMPPoolMod: number;
  FlatHPRegenMod: number;
  rFlatHPRegenModPerLevel: number;
  PercentHPRegenMod: number;
  FlatMPRegenMod: number;
  rFlatMPRegenModPerLevel: number;
  PercentMPRegenMod: number;
  FlatArmorMod: number;
  rFlatArmorModPerLevel: number;
  PercentArmorMod: number;
  rFlatArmorPenetrationMod: number;
  rFlatArmorPenetrationModPerLevel: number;
  rPercentArmorPenetrationMod: number;
  rPercentArmorPenetrationModPerLevel: number;
  FlatPhysicalDamageMod: number;
  rFlatPhysicalDamageModPerLevel: number;
  PercentPhysicalDamageMod: number;
  FlatMagicDamageMod: number;
  rFlatMagicDamageModPerLevel: number;
  PercentMagicDamageMod: number;
  FlatMovementSpeedMod: number;
  rFlatMovementSpeedModPerLevel: number;
  PercentMovementSpeedMod: number;
  rPercentMovementSpeedModPerLevel: number;
  FlatAttackSpeedMod: number;
  PercentAttackSpeedMod: number;
  rPercentAttackSpeedModPerLevel: number;
  rFlatDodgeMod: number;
  rFlatDodgeModPerLevel: number;
  PercentDodgeMod: number;
  FlatCritChanceMod: number;
  rFlatCritChanceModPerLevel: number;
  PercentCritChanceMod: number;
  FlatCritDamageMod: number;
  rFlatCritDamageModPerLevel: number;
  PercentCritDamageMod: number;
  FlatBlockMod: number;
  PercentBlockMod: number;
  FlatSpellBlockMod: number;
  rFlatSpellBlockModPerLevel: number;
  PercentSpellBlockMod: number;
  FlatEXPBonus: number;
  PercentEXPBonus: number;
  rPercentCooldownMod: number;
  rPercentCooldownModPerLevel: number;
  rFlatTimeDeadMod: number;
  rFlatTimeDeadModPerLevel: number;
  rPercentTimeDeadMod: number;
  rPercentTimeDeadModPerLevel: number;
  rFlatGoldPer10Mod: number;
  rFlatMagicPenetrationMod: number;
  rFlatMagicPenetrationModPerLevel: number;
  rPercentMagicPenetrationMod: number;
  rPercentMagicPenetrationModPerLevel: number;
  FlatEnergyRegenMod: number;
  rFlatEnergyRegenModPerLevel: number;
  FlatEnergyPoolMod: number;
  rFlatEnergyModPerLevel: number;
  PercentLifeStealMod: number;
  PercentSpellVampMod: number;
}

interface Gold {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
}

interface Rune {
  isrune: boolean;
  tier: number;
  type: string;
}

type Stats3 = {}

