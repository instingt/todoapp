import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TaskService } from './task/task.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: TaskService,
          useClass: class {
          },
        },
      ],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('App controller defined', () => {
      expect(AppController).toBeDefined();
    });
  });
});
