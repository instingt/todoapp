import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from '../task/task.entity';

@Entity()
export class ContextEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: number;

  @OneToMany(type => TaskEntity, task => task.context)
  tasks: TaskEntity[];
}
