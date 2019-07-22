import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from '../project/project.entity';
import { ContextEntity } from '../context/context.entity';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @IsNotEmpty()
  @CreateDateColumn()
  startDate: Date;

  @CreateDateColumn()
  dueDate: Date;

  @Column({
    default: false,
  })
  isCompleted: boolean;

  @Column({
    default: false,
  })
  isFavorite: boolean;

  @ManyToOne(type => ProjectEntity, project => project.tasks, {
    nullable: true,
  })
  project: ProjectEntity;

  @Column({
    nullable: true,
  })
  contextId: number;

  @ManyToOne(type => ContextEntity, context => context.tasks, {
    nullable: true,
  })
  context: ContextEntity;

  @Column({
    nullable: true,
  })
  projectId: number;

  @Column({
    nullable: true,
  })
  description: string;
}
