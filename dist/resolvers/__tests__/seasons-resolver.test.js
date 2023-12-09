"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const seasons_resolver_1 = require("@resolvers/seasons-resolver");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_testing_1 = require("apollo-server-testing");
const type_graphql_1 = require("type-graphql");
jest.mock('@services/seasons.service', () => ({
    getSeasons: jest.fn(),
}));
describe('SeasonsResolver', () => {
    it('should return a list of seasons', async () => {
        const mockSeasons = [
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
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [seasons_resolver_1.SeasonsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
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
