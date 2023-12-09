import { Field, ObjectType } from 'type-graphql';
import { Circuit } from './circuits-model';
import { Driver } from './driver-model';

@ObjectType()
export class Results {
  @Field()
  season: string;

  @Field({ nullable: true })
  round?: string;

  @Field(() => [RaceResult], { nullable: true })
  Races: RaceResult[];
}

@ObjectType()
export class RaceResult {
  @Field(() => [Result], { nullable: true })
  Results: Result[];

  @Field()
  season: string;

  @Field()
  round: string;

  @Field()
  url: string;

  @Field()
  raceName: string;

  @Field(() => Circuit, { nullable: true })
  circuit?: Circuit;

  @Field()
  date: string;

  @Field()
  time: string;
}

@ObjectType()
export class Constructor {
  @Field()
  constructorId: string;

  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  nationality: string;
}

@ObjectType()
export class ResultTime {
  @Field()
  millis: string;

  @Field()
  time: string;
}

@ObjectType()
export class FastestLap {
  @Field({ nullable: true })
  time?: string;
}

@ObjectType()
export class Result {
  @Field()
  number: string;

  @Field()
  position: string;

  @Field()
  positionText: string;

  @Field()
  points: string;

  @Field(() => Driver)
  Driver: Driver;

  @Field(() => Constructor)
  Constructor: Constructor;

  @Field(() => ResultTime, { nullable: true })
  Time?: ResultTime;

  @Field(() => FastestLap, { nullable: true })
  FastestLap?: FastestLap;

  @Field()
  status: string;

  @Field()
  grid: string;

  @Field()
  laps: string;
}
