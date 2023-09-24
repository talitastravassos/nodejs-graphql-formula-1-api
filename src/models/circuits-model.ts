import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Circuits {
  @Field({ nullable: true })
  season: string;

  @Field(() => [Circuit], { nullable: true })
  Circuits: Circuit[];
}

@ObjectType()
export class Location {
  @Field()
  lat: string;

  @Field()
  long: string;

  @Field()
  locality: string;

  @Field()
  country: string;
}

@ObjectType()
export class Circuit {
  @Field()
  circuitId: string;

  @Field()
  url: string;

  @Field()
  circuitName: string;

  @Field(() => Location, { nullable: true })
  location: Location;
}
