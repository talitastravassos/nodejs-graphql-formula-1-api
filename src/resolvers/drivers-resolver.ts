import { Driver } from '@models/driver-model';
import { getDrivers } from '@services/drivers.service';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class DriversResolver {
  @Query(() => [Driver])
  async drivers(
    @Arg('year', { nullable: true }) year?: string,
    @Arg('driverId', { nullable: true }) driverId?: string,
  ) {
    const drivers = await getDrivers(year, driverId);
    return drivers;
  }
}
