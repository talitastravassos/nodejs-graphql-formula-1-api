"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_testing_1 = require("apollo-server-testing");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const drivers_resolver_1 = require("../drivers-resolver");
jest.mock('@services/drivers.service', () => ({
    getDrivers: jest.fn(),
}));
describe('DriversResolver', () => {
    it('should return a list of drivers', async () => {
        const mockDrivers = [
            {
                driverId: 'abate',
                url: 'http://en.wikipedia.org/wiki/Carlo_Mario_Abate',
                givenName: 'Carlo',
                familyName: 'Abate',
                dateOfBirth: '1932-07-10',
                nationality: 'Italian',
                permanentNumber: null,
                code: null,
            },
        ];
        const getDriversMock = jest.fn().mockResolvedValue(mockDrivers);
        require('@services/drivers.service').getDrivers = getDriversMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [drivers_resolver_1.DriversResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_DRIVERS_QUERY = `
      query {
        drivers {
          driverId
          url
          givenName
          familyName
          dateOfBirth
          nationality
          permanentNumber
          code
        }
      }
    `;
        const response = await query({ query: GET_DRIVERS_QUERY });
        expect(response.data?.drivers).toEqual(mockDrivers);
    });
});
