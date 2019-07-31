import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';

describe('TaskService', () => {
  let service: TaskService;
  let repo: TaskRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(TaskRepository),
          useClass: Repository,
        },
        TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
    repo = module.get(getRepositoryToken(TaskRepository));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTasks', () => {
    it('should return TaskEntities', () => {
      const expectedValue = Promise.resolve([new TaskEntity()]);
      jest.spyOn(repo, 'find').mockReturnValue(expectedValue);

      const actualValue = service.getTasks();

      expect(actualValue).toBe(expectedValue);
    });

    it('should call find method', () => {
      const mock = jest.spyOn(repo, 'find').mockResolvedValue([new TaskEntity()]);

      service.getTasks();

      expect(mock).toBeCalled();
    });
  });
});
