import { Season } from '@models/seasons-model';
import { getSeasons } from '@services/seasons.service';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class SeasonsResolver {
  @Query(() => [Season])
  async seasons() {
    const seasons = await getSeasons();
    return seasons;
  }
}
