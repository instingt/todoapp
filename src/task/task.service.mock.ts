import { TaskEntity } from './task.entity';
import { ProjectEntity } from '../project/project.entity';

export class TaskServiceMock {
  getTasks(): Promise<TaskEntity[]> {
    return Promise.resolve([]);
  }

  createTask(): Promise<ProjectEntity> {
    return Promise.resolve({} as ProjectEntity);
  }
}
