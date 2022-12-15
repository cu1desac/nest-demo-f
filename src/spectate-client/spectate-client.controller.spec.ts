import { Test, TestingModule } from '@nestjs/testing';
import { SpectateClientController } from './spectate-client.controller';
import { SpectateClientService } from './spectate-client.service';

describe('SpectateClientController', () => {
  let controller: SpectateClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpectateClientController],
      providers: [SpectateClientService],
    }).compile();

    controller = module.get<SpectateClientController>(SpectateClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
