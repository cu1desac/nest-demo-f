import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get('getDbDataAmountWithoutKeyframe')
  async getDbDataAmountWithoutKeyframe() {
    return this.matchService.getDbDataAmountWithoutKeyframe();
  }
  // 获取已结束、有对局详情、无关键帧的对局
  // http://localhost:3001/match/getEndedGamesWithDetailWithoutKeyframe?skip=10&limit=20
  @Get('getEndedGamesWithDetailWithoutKeyframe')
  async getEndedGamesWithDetailWithoutKeyframe(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
  ) {
    return this.matchService.getEndedGamesWithDetailWithoutKeyframe(
      skip,
      limit,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(+id, updateMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchService.remove(+id);
  }
}
