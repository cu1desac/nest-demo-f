import { Test, TestingModule } from '@nestjs/testing';
import { SpectateService } from './spectate.service';

describe('SpectateService', () => {
  let service: SpectateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectateService],
    }).compile();

    service = module.get<SpectateService>(SpectateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
