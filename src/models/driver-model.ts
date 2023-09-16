import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Driver {
  @Field()
  driverId: string;

  @Field()
  url: string;

  @Field()
  givenName: string;

  @Field()
  familyName: string;

  @Field()
  dateOfBirth: string;

  @Field()
  nationality: string;

  @Field({ nullable: true })
  permanentNumber?: string;

  @Field({ nullable: true })
  code?: string;
}
