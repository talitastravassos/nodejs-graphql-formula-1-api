import 'reflect-metadata';
/* eslint-disable @typescript-eslint/no-var-requires */
import { ResultsQuery } from '@resolvers/queries/results-query';
import { ResultsResolver } from '@resolvers/results-resolver';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { buildSchema } from 'type-graphql';
import { resultsMock } from '../../__mocks__/results.mocks';

jest.mock('@services/results.service', () => ({
  getResults: jest.fn(),
}));

describe('ResultsResolver', () => {
  it('should return results for a specific year and roundId', async () => {
    const getResultsMock = jest.fn().mockResolvedValue(resultsMock);
    require('@services/results.service').getResults = getResultsMock;

    const schema = await buildSchema({
      resolvers: [ResultsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

    const response = await query({ query: ResultsQuery });

    expect(response.data?.results).toEqual(resultsMock);
  });

  it('should return results for a specific year when roundId is not provided', async () => {
    const getResultsMock = jest.fn().mockResolvedValue(resultsMock);
    require('@services/results.service').getResults = getResultsMock;

    const schema = await buildSchema({
      resolvers: [ResultsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

    const response = await query({ query: ResultsQuery });

    expect(response.data?.results).toEqual(resultsMock);
  });

  it('should return results for last race when year and roundId are not provided', async () => {
    const getResultsMock = jest.fn().mockResolvedValue(resultsMock);
    require('@services/results.service').getResults = getResultsMock;

    const schema = await buildSchema({
      resolvers: [ResultsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

    const response = await query({ query: ResultsQuery });

    expect(response.data?.results).toEqual(resultsMock);
  });
});
