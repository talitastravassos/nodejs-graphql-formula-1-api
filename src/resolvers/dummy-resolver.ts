import { Dummy } from '@models/dummy-model';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class DummyResolver {
  @Query(() => Dummy)
  async hello() {
    return {
      message: 'Hello World!',
      id: '1',
    };
  }
}
