import { PartialType } from '@nestjs/mapped-types';
import { CreateSpectateDto } from './create-spectate.dto';

export class UpdateSpectateDto extends PartialType(CreateSpectateDto) {}
