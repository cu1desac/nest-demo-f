import { Test, TestingModule } from '@nestjs/testing';
import { SpectateClientService } from './spectate-client.service';

describe('SpectateClientService', () => {
  let service: SpectateClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectateClientService],
    }).compile();

    service = module.get<SpectateClientService>(SpectateClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
