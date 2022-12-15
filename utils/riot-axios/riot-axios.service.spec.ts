import { Test, TestingModule } from '@nestjs/testing';
import { RiotAxiosService } from './riot-axios.service';

describe('RiotAxiosService', () => {
  let service: RiotAxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiotAxiosService],
    }).compile();

    service = module.get<RiotAxiosService>(RiotAxiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
