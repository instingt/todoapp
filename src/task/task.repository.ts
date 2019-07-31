import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { TaskDto } from './task.dto';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async createFromDto(taskDto: TaskDto): Promise<TaskEntity> {
    const task = this.create(taskDto);

    return this.save(task);
  }
}
