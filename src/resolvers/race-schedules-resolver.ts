import { getRaceSchedules } from '@services/race-schedule.service';
import { Arg, Query, Resolver } from 'type-graphql';
import { RaceSchedules } from './../models/race-schedule-model';

@Resolver()
export class RaceSchedulesResolver {
  @Query(() => RaceSchedules, { nullable: true })
  async raceSchedules(@Arg('year', { nullable: true }) year?: string) {
    const schedules = await getRaceSchedules(year);

    return schedules;
  }
}
