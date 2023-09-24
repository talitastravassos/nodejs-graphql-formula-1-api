import { ApolloServer } from 'apollo-server';
import 'module-alias/register';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from './resolvers';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [...resolvers],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });
  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

void bootstrap();
