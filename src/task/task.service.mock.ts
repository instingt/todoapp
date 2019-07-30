import { TaskEntity } from './task.entity';

export class TaskServiceMock {
  getTasks(): Promise<TaskEntity[]> {
    return Promise.resolve([]);
  }
}
