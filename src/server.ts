import { ApolloServer } from 'apollo-server';
import 'module-alias/register';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DriversResolver } from './resolvers/drivers-resolver';
import { RaceSchedulesResolver } from './resolvers/race-schedules-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [DriversResolver, RaceSchedulesResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });
  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

void bootstrap();
