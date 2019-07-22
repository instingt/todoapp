import { getManager } from 'typeorm';
import { ProjectEntity } from '../project/project.entity';
import { TaskEntity } from '../task/task.entity';

export async function run() {
  const manager = getManager();
  const project1 = manager.create(ProjectEntity);

  project1.title = 'Project 1';
  project1.isDirectory = false;
  await manager.save(project1);

  const entities = ['do something', 'do another', 'go sleep'].map(title => {
    const entity = manager.create(TaskEntity);

    entity.title = title;
    entity.project = project1;

    return entity;
  });

  await saveEntities(entities);
}

async function saveEntities(entities: any[]) {
  const manager = getManager();

  for (const entity of entities) {
    await manager.save(entity);
  }
}
