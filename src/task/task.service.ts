import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {
  }

  getTask(): Promise<TaskEntity[]> {
    return this.taskRepo.find({
      // relations: ['project', 'context'],
    });
  }
}
