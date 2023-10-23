import { type NonEmptyArray } from 'type-graphql';
import { CircuitsResolver } from './circuits-resolver';
import { DriversResolver } from './drivers-resolver';
import { RaceSchedulesResolver } from './race-schedules-resolver';

// eslint-disable-next-line @typescript-eslint/ban-types
export const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  DriversResolver,
  RaceSchedulesResolver,
  CircuitsResolver,
];