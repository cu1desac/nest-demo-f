import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpectateService } from './spectate.service';
import { CreateSpectateDto } from './dto/create-spectate.dto';
import { UpdateSpectateDto } from './dto/update-spectate.dto';

@Controller('spectate')
export class SpectateController {
  constructor(private readonly spectateService: SpectateService) {}

  @Post()
  create(@Body() createSpectateDto: CreateSpectateDto) {
    return this.spectateService.create(createSpectateDto);
  }

  @Get()
  findAll() {
    return this.spectateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spectateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpectateDto: UpdateSpectateDto) {
    return this.spectateService.update(+id, updateSpectateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spectateService.remove(+id);
  }
}
