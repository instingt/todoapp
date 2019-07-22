import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { ContextModule } from './context/context.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: 'all',
    }),
    TaskModule,
    ProjectModule,
    ContextModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
