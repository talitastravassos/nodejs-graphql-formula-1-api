import 'reflect-metadata';
/* eslint-disable @typescript-eslint/no-var-requires */
import { type Season } from '@models/seasons-model';
import { SeasonsResolver } from '@resolvers/seasons-resolver';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { buildSchema } from 'type-graphql';

jest.mock('@services/seasons.service', () => ({
  getSeasons: jest.fn(),
}));

describe('SeasonsResolver', () => {
  it('should return a list of seasons', async () => {
    const mockSeasons: Season[] = [
      {
        season: '1950',
        url: 'http://en.wikipedia.org/wiki/1950_Formula_One_season',
      },
      {
        season: '1951',
        url: 'http://en.wikipedia.org/wiki/1951_Formula_One_season',
      },
    ];

    const getSeasonsMock = jest.fn().mockResolvedValue(mockSeasons);
    require('@services/seasons.service').getSeasons = getSeasonsMock;

    const schema = await buildSchema({
      resolvers: [SeasonsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

    const GET_SEASONS_QUERY = `
    query Seasons {
      seasons {
        season
        url
      }
    }
    `;

    const response = await query({ query: GET_SEASONS_QUERY });

    expect(response.data?.seasons).toEqual(mockSeasons);
  });
});
