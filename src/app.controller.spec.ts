import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TaskService } from './task/task.service';
import { TaskServiceMock } from './task/task.service.mock';
import { ContextService } from './context/context.service';
import { ContextServiceMock } from './context/context.service.mock';
import { ProjectService } from './project/project.service';
import { ProjectServiceMock } from './project/project.service.mock';
import { TaskEntity } from './task/task.entity';
import { ProjectEntity } from './project/project.entity';
import { ContextEntity } from './context/context.entity';
import { TaskDto } from './task/task.dto';

describe('AppController', () => {
  let appController: AppController;
  let taskService: TaskService;
  let projectService: ProjectService;
  let contextService: ContextService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: TaskService,
          useClass: TaskServiceMock,
        },
        {
          provide: ContextService,
          useClass: ContextServiceMock,
        },
        {
          provide: ProjectService,
          useClass: ProjectServiceMock,
        },
      ],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
    taskService = app.get(TaskService);
    projectService = app.get(ProjectService);
    contextService = app.get(ContextService);
  });

  describe('root', () => {
    it('App controller defined', () => {
      expect(AppController).toBeDefined();
    });

    it('should call getTasks', () => {
      const mock = jest.spyOn(taskService, 'getTasks').mockResolvedValue([new TaskEntity()]);

      appController.getTasks();

      expect(mock).toBeCalled();
    });

    it('should call getProjects', () => {
      const mock = jest.spyOn(projectService, 'getProjects').mockResolvedValue([new ProjectEntity()]);

      appController.getProjects();

      expect(mock).toBeCalled();
    });

    it('should call getContexts', () => {
      const mock = jest.spyOn(contextService, 'getContexts').mockResolvedValue([new ContextEntity()]);

      appController.getContexts();

      expect(mock).toBeCalled();
    });

    it('should call create task on post task', () => {
      const task: TaskDto = {
        title: 'Some task',
      };
      const createdTask = new TaskEntity();

      const mock = jest.spyOn(taskService, 'createTask').mockResolvedValue(createdTask);

      appController.createTask(task);

      expect(mock).toBeCalledWith(task);
    });
  });
});
