import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from '../task/task.entity';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isDirectory: boolean;

  @OneToMany(type => TaskEntity, task => task.project)
  tasks: TaskEntity;
}
