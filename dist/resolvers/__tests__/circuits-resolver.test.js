"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const circuits_resolver_1 = require("@resolvers/circuits-resolver");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_testing_1 = require("apollo-server-testing");
const type_graphql_1 = require("type-graphql");
const circuits_mocks_1 = require("../../__mocks__/circuits.mocks");
jest.mock('@services/circuits.service', () => ({
    getCircuits: jest.fn(),
}));
describe('CircuitsResolver', () => {
    it('should return circuits for a specific year and circuitId', async () => {
        const getCircuitsMock = jest.fn().mockResolvedValue(circuits_mocks_1.mockCircuits);
        require('@services/circuits.service').getCircuits = getCircuitsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [circuits_resolver_1.CircuitsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_CIRCUITS_QUERY = `
      query {
        circuits(year: "2023", circuitId: "monza") {
          season
          Circuits {
            circuitId
            url
            circuitName
            location {
              lat
              long
              locality
              country
            }
          }
        }
      }
    `;
        const response = await query({ query: GET_CIRCUITS_QUERY });
        expect(response.data?.circuits).toEqual(circuits_mocks_1.mockCircuits);
    });
    it('should return circuits for a specific year when circuitId is not provided', async () => {
        const getCircuitsMock = jest.fn().mockResolvedValue(circuits_mocks_1.mockCircuits);
        require('@services/circuits.service').getCircuits = getCircuitsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [circuits_resolver_1.CircuitsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_CIRCUITS_QUERY = `
      query {
        circuits(year: "2023") {
          season
          Circuits {
            circuitId
            url
            circuitName
            location {
              lat
              long
              locality
              country
            }
          }
        }
      }
    `;
        const response = await query({ query: GET_CIRCUITS_QUERY });
        expect(response.data?.circuits).toEqual(circuits_mocks_1.mockCircuits);
    });
    it('should return circuits for a specific circuitId when year is not provided', async () => {
        const getCircuitsMock = jest.fn().mockResolvedValue(circuits_mocks_1.mockCircuits);
        require('@services/circuits.service').getCircuits = getCircuitsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [circuits_resolver_1.CircuitsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_CIRCUITS_QUERY = `
      query {
        circuits(circuitId: "monza") {
          season
          Circuits {
            circuitId
            url
            circuitName
            location {
              lat
              long
              locality
              country
            }
          }
        }
      }
    `;
        const response = await query({ query: GET_CIRCUITS_QUERY });
        expect(response.data?.circuits).toEqual(circuits_mocks_1.mockCircuits);
    });
    it('should return null when both year and circuitId are not provided', async () => {
        const getCircuitsMock = jest.fn().mockResolvedValue(null);
        require('@services/circuits.service').getCircuits = getCircuitsMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [circuits_resolver_1.CircuitsResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_CIRCUITS_QUERY = `
      query {
        circuits {
          season
          Circuits {
            circuitId
            url
            circuitName
            location {
              lat
              long
              locality
              country
            }
          }
        }
      }
    `;
        const response = await query({ query: GET_CIRCUITS_QUERY });
        expect(response.data?.circuits).toBeNull();
    });
});
