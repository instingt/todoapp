import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContextEntity } from './context.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContextService {
  constructor(
    @InjectRepository(ContextEntity)
    private readonly contextRepo: Repository<ContextEntity>,
  ) {

  }

  getContexts(): Promise<ContextEntity[]> {
    return this.contextRepo.find();
  }
}
