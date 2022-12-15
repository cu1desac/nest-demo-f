import {
  Controller,
  Get,
  Req,
  Query,
  Ip,
  Inject,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { User } from '/libs/db/src/schemas/User.schame.ts';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(User.name) private readonly UserModel: ReturnModelType<typeof User>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async test() {
    await this.UserModel.create({
      username: 'admin',
      password: '123456',
    });
    return this.UserModel.findOne();
  }
  @Get('riot')
  async riotTest() {
    return this.appService.riotTest();
  }
  @Get('url1')
  url1() {
    return 'http://localhost:3001/url2';
  }
  @Get('url2')
  url2() {
    return 'https://api.bilibili.com/x/web-interface/search/default';
  }
  @HttpCode(404)
  @Get('err')
  err() {
    console.log(1111);
    return 'err';
  }
}
