import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskEntity } from './task/task.entity';
import { run } from './utils/fillTestData';

@Controller()
export class AppController {
  constructor(private taskService: TaskService) {
  }

  @Get()
  getHello(): Promise<TaskEntity[]> {
    return this.taskService.getTask();
  }

  @Get('/fill')
  fill() {
    run();

    return 'OK';
  }
}
