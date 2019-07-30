import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';

describe('ProjectService', () => {
  let service: ProjectService;
  let repo: Repository<ProjectEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(ProjectEntity),
          useClass: Repository,
        },
        ProjectService,
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repo = module.get(getRepositoryToken(ProjectEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getProjects', () => {
    it('should return ProjectEntities', () => {
      const expectedValue = Promise.resolve([new ProjectEntity()]);

      jest.spyOn(repo, 'find').mockReturnValue(expectedValue);

      const actualValue = service.getProjects();

      expect(actualValue).toBe(expectedValue);
    });

    it('should call fund method', () => {
      const mock = jest.spyOn(repo, 'find').mockResolvedValue([new ProjectEntity()]);

      service.getProjects();

      expect(mock).toBeCalled();
    });
  });
});
