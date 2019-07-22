import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity]),
  ],
  providers: [ProjectService],
})
export class ProjectModule {
}
