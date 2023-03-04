import { Inject, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Game } from '@app/db/schemas/Game.schame';
import { ReturnModelType } from '@typegoose/typegoose';
import {
  Amount,
  Detail,
  MatchMongo,
  Participant,
} from './interfaces/MatchMongo.interface';
import { promises as fsp } from 'fs';
import * as dayjs from 'dayjs';
import {
  Champion,
  MatchVue,
  SimpleInformation,
} from './interfaces/MatchVue.interface';
import { Summoner } from './interfaces/Summoner.interface';
import { Item } from './interfaces/Item.interface';
import { Perk } from './interfaces/Perk.interface';

// 本地dataDragon json的读取
class DataDragon {
  gameVersion: string;
  // 传入版本信息 返回数据存放目录
  private async getDataPath() {
    // 取大版本号
    const gameVersionFirstNumber = Number(this.gameVersion.split('.')[0]);
    if (gameVersionFirstNumber === 0) {
      throw `gameVersion split failed: ${this.gameVersion}`;
    }
    // 文件目录
    let dataPath: string;
    if (gameVersionFirstNumber === 12) {
      dataPath = `I:/下载/dragontail-12.19.1/12.19.1/data/zh_CN`;
    }
    if (gameVersionFirstNumber === 13) {
      dataPath = `I:/下载/dragontail-13.4.1/13.4.1/data/zh_CN`;
    }
    try {
      await fsp.stat(dataPath);
      // 此时表明此版本dataDragon存在 直接返回即可
      return dataPath;
    } catch (e) {
      // 说明此版本dataDragon不存在，
      throw `getDataPath failed gameVersion: ${this.gameVersion}`;
    }
  }

  // 模板 根据游戏版本 和 文件名返回json对象
  private async getJson(fileName: string) {
    try {
      const dataDragonFile = await this.getDataPath();
      const summonerSkillJsonFile = `${dataDragonFile}/${fileName}`;
      return JSON.parse((await fsp.readFile(summonerSkillJsonFile)).toString());
    } catch (e) {
      throw `getJson error gameVersion:${this.gameVersion};fileName:${fileName}`;
    }
  }
  // 召唤师技能信息
  protected async geSpellSkillJson() {
    return this.getJson('summoner.json');
  }
  // 英雄信息
  protected async getChampionJson() {
    return this.getJson('champion.json');
  }
  // 装备信息
  protected async getItemJson() {
    return this.getJson('item.json');
  }
  // 符文信息
  protected async getPerkJson() {
    return this.getJson('runesReforged.json');
  }
}
// 拼接数据
class FormData extends DataDragon {
  gameDbData: Detail;
  private participant: Participant;
  private puuid: string;
  private summonerSkillJson: Summoner;
  private championJson: Champion;
  private itemJson: Item;
  private perkJson: Perk[];
  constructor(gameDbData: Detail) {
    super();
    this.gameDbData = gameDbData;
    const {
      info: { gameVersion },
    } = gameDbData;
    this.gameVersion = gameVersion;
  }
  // 根据gameVersion 读取本地dataDragon
  public async readDataDragonFile() {
    // 召唤师技能
    this.summonerSkillJson = (await this.geSpellSkillJson()) as Summoner;
    // 英雄信息
    this.championJson = (await this.getChampionJson()) as Champion;
    // 装备信息
    this.itemJson = (await this.getItemJson()) as Item;
    // 符文信息
    this.perkJson = (await this.getPerkJson()) as Perk[];
  }
  // 拼凑数据
  // 对局简略信息
  private formSimpleInformation() {
    const {
      info: { gameStartTimestamp, gameMode, gameDuration },
    } = this.gameDbData;
    // 日期，如 10.23
    const date = dayjs(gameStartTimestamp).format('MM.DD');
    // 游戏时长(只取分) 如：28
    const durationMinuter = Math.floor(gameDuration / 60);
    // 总击杀数 ？待完成
    const totalKills = 10;
    return { date, gameMode, totalKills, durationMinuter };
  }
  // 开始拼凑对局详情
  private formDetailedInformation() {
    const {
      info: { participants },
    } = this.gameDbData;
    return participants.map((participant) => {
      this.participant = participant;
      const { puuid } = participant;
      this.puuid = puuid;
      const champion = this.formChampion();
      const spell = this.formSpell();
      const perk = this.formPerk();
      const summoner = this.formSummoner();
      const kda = this.formKda();
      const item = this.formItem();
      const millions = this.formMinions();
      const win = this.formWin();
      return { champion, spell, perk, summoner, kda, item, millions, win };
    });
  }
  // 总的
  public formSimpleAndDetailedInformation() {
    const simpleInformation = this.formSimpleInformation();
    const detailedInformation = this.formDetailedInformation();
    return { simpleInformation, detailedInformation };
  }
  private formChampion() {
    const { championId, championName, champLevel } = this.participant;
    // 英雄头像图片以英雄英文名称命名
    const championAvatarUrl = `img/champion/${championName}.png`;
    return {
      championId,
      championName,
      championAvatarUrl,
      champLevel,
      forKey: `${this.puuid}_${championName}`,
    };
  }
  // 拼凑 召唤师技能
  private formSpell() {
    const { summoner1Id, summoner2Id } = this.participant;
    return [
      {
        spellId: summoner1Id,
        spellImgUrl: `img/spell/${summoner1Id}.png`,
        forKey: `${this.puuid}_${summoner1Id}`,
      },
      {
        spellId: summoner2Id,
        spellImgUrl: `img/spell/${summoner2Id}.png`,
        forKey: `${this.puuid}_${summoner2Id}`,
      },
    ];
  }
  // 符文
  private formPerk() {
    // 解构取出 主系的符文大类和主系符文 以及 副系的符文大类
    const {
      perks: {
        styles: [
          {
            style: style1,
            selections: [{ perk: perk1 }],
          },
          { style: style2 },
        ],
      },
    } = this.participant;
    // 主系
    const perk1ImgUrl = this.perkJson
      .find(({ id }) => id === style1)
      .slots.find(({ runes }) => runes.find(({ id }) => id === perk1))
      .runes.find(({ id }) => id === perk1).icon;
    // 副系
    const style2ImgUrl = this.perkJson.find(({ id }) => id === style2).icon;

    return [
      {
        imgUrl: perk1ImgUrl,
        forKey: `${this.puuid}_${perk1ImgUrl}`,
      },
      {
        imgUrl: style2ImgUrl,
        forKey: `${this.puuid}_${style2ImgUrl}`,
      },
    ];
  }
  // 召唤师
  private formSummoner() {
    const { summonerName, summonerLevel } = this.participant;
    return {
      summonerName,
      summonerLevel,
      // 段位
      summonerStage: '',
    };
  }
  // KDA
  private formKda() {
    const {
      kills,
      deaths,
      assists,
      challenges: { kda: _kda },
    } = this.participant;
    const kdaString = `${kills}/${deaths}/${assists}`;
    const kdaNumber = _kda.toFixed(2);
    return { kdaString, kdaNumber };
  }
  // 装备
  private formItem() {
    // 六件装备 先取出装备ID
    const itemIds = Array.from({ length: 6 }).map(
      (_, index) => this.participant[`item${index}`],
    ) as number[];
    // 如果装备ID不存在，就返回空字符
    const itemImgUrls = itemIds.map((itemId: number) =>
      this.itemJson.data[itemId]
        ? `img/item/${this.itemJson.data[itemId].image.full}`
        : '',
    );
    return itemIds.map((itemId, index) => ({
      itemId,
      itemImgUrl: itemImgUrls[index],
      forKey: `${this.puuid}_${itemId}`,
    }));
  }
  // 补刀
  private formMinions() {
    const { totalMinionsKilled } = this.participant;
    return { totalMinionsKilled, pureMinionKilled: 10 };
  }
  // 输赢
  private formWin() {
    const { win } = this.participant;
    return { win };
  }
}
@Injectable()
export class MatchService extends DataDragon {
  constructor(
    @Inject(Game.name) private readonly GameModel: ReturnModelType<typeof Game>,
  ) {
    super();
  }
  private async formMatchListDataByGameDbData(
    gameDbData: Detail,
    begin: number,
    index: number,
  ) {
    const {
      info: { gameVersion },
      metadata: { matchId },
    } = gameDbData;
    // 根据版本号读取对应物料目录
    this.gameVersion = gameVersion;
    // 召唤师技能
    const summonerSkillJson = await this.geSpellSkillJson();
    // 英雄信息
    const championJson = await this.getChampionJson();
    // 装备信息
    const itemJson = await this.getItemJson();
    // 符文信息
    const perkJson = await this.getPerkJson();
    // ????????????????????????????????????????? 符文，符文图片原存放位置与上述三个均不同哦（原地址在 I:\下载\dragontail-12.19.1\img\perk-images  但是被我放到vite静态目录下 和上述三个同级目录）
    function getSummonerSkillImgUrBySkillId(summonerSkillId) {
      for (const skillName in summonerSkillJson.data) {
        if (
          summonerSkillJson.data[skillName].key === summonerSkillId.toString()
        ) {
          return `img/spell/${summonerSkillJson.data[skillName].image.full}`;
        }
      }
      return '';
    }
    function getChampionImgUrlByChampionId(championId) {
      for (const championName in championJson.data) {
        if (championJson.data[championName].key === championId.toString()) {
          return `img/champion/${championJson.data[championName].image.full}`;
        }
      }
      return '';
    }
    function getItemImgUrlByItemId(itemId) {
      if (itemId === 0) return '';
      for (const _itemId in itemJson.data) {
        if (_itemId === itemId.toString()) {
          return `img/item/${itemJson.data[_itemId].image.full}`;
        }
      }
      return '';
    }
    //根据符文大类（精密、启迪、坚定等） 和 符文ID 返回图片url
    function getPerkImgUrlById(perkStyleId, perkId) {
      for (const { id, slots } of perkJson) {
        //console.log(perkStyleId, perkId)
        //非指定符文大类
        if (id !== perkStyleId) {
          continue;
        }
        //遍历符文大类，找小符文就快了
        for (const { runes } of slots) {
          //大类符文还分为四行，所以还得遍历一下
          for (const { id: runeId, icon } of runes) {
            if (runeId === perkId) {
              return `img/${icon}`;
            }
          }
        }
      }
      return 'https://sponsors.vuejs.org/images/xitujuejinjishushequ.png';
    }
    //符文大分类  如 精密、坚定、启迪等
    function getPerkStyleImgUrlById(perkStyleId) {
      for (const perkStyle of perkJson) {
        const { id, icon } = perkStyle;
        if (id === perkStyleId) {
          return `img/${icon}`;
        }
      }
      return 'https://sponsors.vuejs.org/images/xitujuejinjishushequ.png';
    }
    //console.log(getPerkImgUrlById(8100,8112))

    // 开始拼凑数据

    const detailDatas = [];
    //遍历游戏对局详情对象，获取召唤师、英雄符文、装备 等 信息

    gameDbData.info.participants.forEach((datum, i) => {
      const champion = {
        championForKey: `${matchId}_${datum.summonerId}_${datum.championId}`,
        championId: datum.championId,
        championName: datum.championName,
        championImgUrl: getChampionImgUrlByChampionId(datum.championId),
        championLevel: datum.champLevel,
        champLevel: datum.champLevel,
      };
      const spells = [
        {
          summonerSkillForKey: `${matchId}_${datum.summonerId}_summonerSkill1`,
          summonerSkillId: datum.summoner1Id,
          summonerSkillImg: getSummonerSkillImgUrBySkillId(datum.summoner1Id),
        },
        {
          summonerSkillForKey: `${matchId}_${datum.summonerId}_summonerSkill2`,
          summonerSkillId: datum.summoner2Id,
          summonerSkillImg: getSummonerSkillImgUrBySkillId(datum.summoner2Id),
        },
      ];
      const perks = {
        primary: {
          url: getPerkImgUrlById(
            datum.perks.styles[0].style,
            datum.perks.styles[0].selections[0].perk,
          ),
        },
        secondary: {
          url: getPerkStyleImgUrlById(datum.perks.styles[1].style),
        },
      };
      const name = {
        name: datum.summonerName,
        summonerLevel: datum.summonerLevel,
      };
      const kda = {
        kills: datum.kills,
        deaths: datum.deaths,
        assists: datum.assists,
        kdaString: `${datum.kills}/${datum.deaths}/${datum.assists}`,
        kdaNumber: datum.challenges.kda.toFixed(2),
      };
      const items = [
        ...Array.from({ length: 6 }).map((_, index) => {
          return {
            itemForKey:
              `${matchId}_${datum.championId}_${datum.summonerId}_` +
              datum[`item${index}`],
            itemId: datum[`item${index}`],
            itemImg: getItemImgUrlByItemId(datum[`item${index}`]),
          };
        }),
      ];
      const win = datum.win;
      const totalMinionsKilled = datum.totalMinionsKilled;
      //表项是否被点击

      const detailKey = i;
      const detailData = {
        champion,
        spells,
        perks,
        name,
        kda,
        items,
        totalMinionsKilled,
        win,
        key: detailKey,
      };

      detailDatas.push(detailData);
    });

    //pinia里的data
    const avatar = {
      src: '/img/champion/Ahri.png',
    };
    const win = {
      win: true,
      gameMode: gameDbData?.info?.gameMode,
      matchId: gameDbData?.metadata?.matchId,
      gameId: gameDbData?.info?.gameId,
      tag: [],
    };
    const date = dayjs(gameDbData?.info?.gameStartTimestamp).format('MM.DD');
    const key = Math.trunc(begin) + Math.trunc(index);
    const gameModeDir = {
      CLASSIC: '匹配',
    };
    //表项是否被点击
    const clicked = false;

    //对局详情上面的 类似 总结的表格
    const topicData = {
      date,
      gameMode:
        gameModeDir?.[gameDbData.info.gameMode] ?? gameDbData.info.gameMode,
      // data.info.gameStartTimestamp
      beginTime: dayjs(gameDbData?.info?.gameStartTimestamp).format('HH:mm'),
      matchId: gameDbData.metadata.matchId,
      gameDuration: `${Math.floor(gameDbData.info.gameDuration / 60)}:${
        gameDbData.info.gameDuration % 60
      }`,
    };
    return {
      avatar,
      win,
      date,
      key,
      clicked,
      detail: detailDatas,
      topicData,
      keyFrame: [],
      fake: false,
    };
  }
  // 2023年3月4日19:29:51 测试
  private async formMatchListDataByGameDbData2(
    gameDbData: Detail,
    begin: number,
    index: number,
  ) {
    const formData = new FormData(gameDbData);
    // 先读取本地dataDragon json
    await formData.readDataDragonFile();
    // 开始拼凑
    return formData.formSimpleAndDetailedInformation();
  }

  // 获取数据库已结束对局且无关键帧数据个数
  public async getDbDataAmountWithoutKeyframe(): Promise<Amount> {
    try {
      const filter = {
        'gameInfo.gamePending': false,
        'detail.info': {
          $ne: null,
        },
        'keyFrame.0': {
          $exists: 0,
        },
      };
      const amount = await this.GameModel.find(filter).count().exec();
      return { amount };
    } catch (e) {
      throw {
        function: 'getDbDataAmount',
        e,
      };
    }
  }
  // 游戏结束并且带有对局详情的记录
  public async getEndedGamesWithDetailWithoutKeyframe(
    skip: number,
    limit: number,
  ) {
    try {
      const filter = {
        'gameInfo.gamePending': false,
        'detail.info': {
          $ne: null,
        },
        'keyFrame.0': {
          $exists: 0,
        },
      };
      const games = (await this.GameModel.find(filter)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .exec()
        .then((games) => {
          if (games.length === 0) {
            throw 'no data';
          }
          return games;
        })) as MatchMongo[];
      //将取出的数据处理成需要的格式
      return await Promise.all(
        games.map(async ({ detail }, i) =>
          this.formMatchListDataByGameDbData2(detail, skip, i),
        ),
      );
    } catch (e) {
      throw {
        function: 'getEndedGameWithDetail',
        e,
      };
    }
  }
  create(createMatchDto: CreateMatchDto) {
    return 'This action adds a new match';
  }

  async findAll() {
    return this.getEndedGamesWithDetailWithoutKeyframe(0, 10);
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
