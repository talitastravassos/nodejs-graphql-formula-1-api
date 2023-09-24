import { Field, ObjectType } from 'type-graphql';
import { Circuit } from './circuits-model';

@ObjectType()
export class RaceSchedules {
  @Field()
  season: string;

  @Field(() => [Race], { nullable: true })
  Races: Race[];
}

@ObjectType()
export class FirstPractice {
  @Field()
  date: string;

  @Field()
  time: string;
}

@ObjectType()
export class Race {
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

  @Field(() => FirstPractice, { nullable: true })
  firstPractice?: FirstPractice;

  @Field(() => FirstPractice, { nullable: true })
  secondPractice?: FirstPractice;

  @Field(() => FirstPractice, { nullable: true })
  thirdPractice?: FirstPractice;

  @Field(() => FirstPractice, { nullable: true })
  qualifying?: FirstPractice;

  @Field(() => FirstPractice, { nullable: true })
  sprint?: FirstPractice;
}
