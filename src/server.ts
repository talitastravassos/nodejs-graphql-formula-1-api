import { ApolloServer } from 'apollo-server';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DriversResolver } from './resolvers/drivers-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [DriversResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

void bootstrap();
