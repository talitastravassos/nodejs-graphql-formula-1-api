import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Dummy {
  @Field()
  message: string;

  @Field()
  id?: string;
}
