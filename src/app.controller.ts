import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskEntity } from './task/task.entity';
import { run } from './utils/fillTestData';
import { ProjectEntity } from './project/project.entity';
import { ProjectService } from './project/project.service';
import { ContextEntity } from './context/context.entity';
import { ContextService } from './context/context.service';
import { TaskDto } from './task/task.dto';

@Controller()
export class AppController {
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private contextService: ContextService,
  ) {
  }

  @Get('/tasks')
  getTasks(): Promise<TaskEntity[]> {
    return this.taskService.getTasks();
  }

  @Get('/projects')
  getProjects(): Promise<ProjectEntity[]> {
    return this.projectService.getProjects();
  }

  @Get('/contexts')
  getContexts(): Promise<ContextEntity[]> {
    return this.contextService.getContexts();
  }

  @Post('/task')
  createTask(@Body() task: TaskDto): Promise<TaskEntity> {
    return this.taskService.createTask(task);
  }

  @Get('/fill')
  async fill() {
    await run();

    return 'OK';
  }
}
