import { Test, TestingModule } from '@nestjs/testing';
import { ObserverController } from './observer.controller';
import { ObserverService } from './observer.service';

describe('ObserverController', () => {
  let controller: ObserverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObserverController],
      providers: [ObserverService],
    }).compile();

    controller = module.get<ObserverController>(ObserverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
