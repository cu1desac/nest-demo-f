import { PartialType } from '@nestjs/mapped-types';
import { CreateSpectateClientDto } from './create-spectate-client.dto';

export class UpdateSpectateClientDto extends PartialType(CreateSpectateClientDto) {}
