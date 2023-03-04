import { Test, TestingModule } from '@nestjs/testing';
import { ObserverService } from './observer.service';

describe('ObserverService', () => {
  let service: ObserverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObserverService],
    }).compile();

    service = module.get<ObserverService>(ObserverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
