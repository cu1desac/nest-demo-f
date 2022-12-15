import { Test, TestingModule } from '@nestjs/testing';
import { SpectatorTvService } from './spectator-tv.service';

describe('SpectatorTvService', () => {
  let service: SpectatorTvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectatorTvService],
    }).compile();

    service = module.get<SpectatorTvService>(SpectatorTvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
