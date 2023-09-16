import { ApolloServer } from 'apollo-server';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DummyResolver } from './resolvers/dummy-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [DummyResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

void bootstrap();
