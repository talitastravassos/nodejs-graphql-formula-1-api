import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Season {
  @Field()
  season: string;

  @Field()
  url: string;
}
