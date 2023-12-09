"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const results_query_1 = require("@resolvers/queries/results-query");
const results_resolver_1 = require("@resolvers/results-resolver");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_testing_1 = require("apollo-server-testing");
const type_graphql_1 = require("type-graphql");
const results_mocks_1 = require("../../__mocks__/results.mocks");
jest.mock('@services/results.service', () => ({
    getResults: jest.fn(),
}));
describe('ResultsResolver', () => {
    it('should return results for a specific year and roundId', async () => {
        const getResultsMock = jest.fn().mockResolvedValue(results_mocks_1.resultsMock);
        require('@services/results.service').getResults = getResultsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [results_resolver_1.ResultsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const response = await query({ query: results_query_1.ResultsQuery });
        expect(response.data?.results).toEqual(results_mocks_1.resultsMock);
    });
    it('should return results for a specific year when roundId is not provided', async () => {
        const getResultsMock = jest.fn().mockResolvedValue(results_mocks_1.resultsMock);
        require('@services/results.service').getResults = getResultsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [results_resolver_1.ResultsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const response = await query({ query: results_query_1.ResultsQuery });
        expect(response.data?.results).toEqual(results_mocks_1.resultsMock);
    });
    it('should return results for last race when year and roundId are not provided', async () => {
        const getResultsMock = jest.fn().mockResolvedValue(results_mocks_1.resultsMock);
        require('@services/results.service').getResults = getResultsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [results_resolver_1.ResultsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const response = await query({ query: results_query_1.ResultsQuery });
        expect(response.data?.results).toEqual(results_mocks_1.resultsMock);
    });
});
