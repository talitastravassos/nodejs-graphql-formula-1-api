import { Circuits } from '@models/circuits-model';
import { getCircuits } from '@services/circuits.service';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class CircuitsResolver {
  @Query(() => Circuits, { nullable: true })
  async circuits(
    @Arg('year', { nullable: true }) year?: string,
    @Arg('circuitId', { nullable: true }) circuitId?: string,
  ) {
    const circuits = await getCircuits(year, circuitId);

    return circuits;
  }
}
