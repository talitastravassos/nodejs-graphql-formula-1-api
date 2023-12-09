import { Results } from '@models/results-model ';
import { getResults } from '@services/results.service';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class ResultsResolver {
  @Query(() => Results)
  async results(
    @Arg('year', { nullable: true }) year?: string,
    @Arg('roundId', { nullable: true }) roundId?: string,
  ) {
    const results = await getResults(year, roundId);
    return results;
  }
}
