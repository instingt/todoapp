import { ContextEntity } from './context.entity';

export class ContextServiceMock {
  getContexts(): Promise<ContextEntity[]> {
    return Promise.resolve([]);
  }
}
