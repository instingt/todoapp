import { Module } from '@nestjs/common';
import { ContextService } from './context.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContextEntity } from './context.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContextEntity]),
  ],
  providers: [ContextService],
  exports: [ContextService],
})
export class ContextModule {
}
