import { ProjectEntity } from './project.entity';

export class ProjectServiceMock {
  getProjects(): Promise<ProjectEntity[]> {
    return Promise.resolve([]);
  }
}
