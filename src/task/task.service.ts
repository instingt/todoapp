import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TaskDto } from './task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepo: TaskRepository,
  ) {
  }

  getTasks(): Promise<TaskEntity[]> {
    return this.taskRepo.find();
  }

  createTask(task: TaskDto): Promise<TaskEntity> {
    return this.taskRepo.createFromDto(task);
  }
}
