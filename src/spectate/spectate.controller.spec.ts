import { Test, TestingModule } from '@nestjs/testing';
import { SpectateController } from './spectate.controller';
import { SpectateService } from './spectate.service';

describe('SpectateController', () => {
  let controller: SpectateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpectateController],
      providers: [SpectateService],
    }).compile();

    controller = module.get<SpectateController>(SpectateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
