import { Injectable } from '@nestjs/common';
import { CreateSpectateDto } from './dto/create-spectate.dto';
import { UpdateSpectateDto } from './dto/update-spectate.dto';

@Injectable()
export class SpectateService {
  create(createSpectateDto: CreateSpectateDto) {
    return 'This action adds a new spectate';
  }

  findAll() {
    return `This action returns all spectate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spectate`;
  }

  update(id: number, updateSpectateDto: UpdateSpectateDto) {
    return `This action updates a #${id} spectate`;
  }

  remove(id: number) {
    return `This action removes a #${id} spectate`;
  }
}
