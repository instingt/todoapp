import { Test, TestingModule } from '@nestjs/testing';
import { ContextService } from './context.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContextEntity } from './context.entity';

describe('ContextService', () => {
  let service: ContextService;
  let repo: Repository<ContextEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(ContextEntity),
          useClass: Repository,
        },
        ContextService,
      ],
    }).compile();

    service = module.get<ContextService>(ContextService);
    repo = module.get(getRepositoryToken(ContextEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getContexts', () => {
    it('should return entities from repo', () => {
      const expectedValue = Promise.resolve([new ContextEntity()]);
      jest.spyOn(repo, 'find').mockReturnValue(expectedValue);

      const actualValue = service.getContexts();

      expect(actualValue).toBe(expectedValue);
    });

    it('should call find method', () => {
      const mock = jest.spyOn(repo, 'find').mockResolvedValue([new ContextEntity()]);

      service.getContexts();

      expect(mock).toBeCalled();
    });
  });
});
