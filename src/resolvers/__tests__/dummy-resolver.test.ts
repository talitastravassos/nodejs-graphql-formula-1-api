import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { buildSchema } from 'type-graphql';
import { DummyResolver } from '../dummy-resolver';

describe('DummyResolver', () => {
  it('should return a hello message', async () => {
    const schema = await buildSchema({
      resolvers: [DummyResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

    const GET_HELLO_QUERY = `
      query {
        hello {
          message
          id
        }
      }
    `;

    const response = await query({ query: GET_HELLO_QUERY });

    expect(response.data?.hello).toEqual({
      message: 'Hello World!',
      id: '1',
    });
  });
});
