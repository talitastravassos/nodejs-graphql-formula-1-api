"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_testing_1 = require("apollo-server-testing");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const race_schedule_mocks_1 = require("../../__mocks__/race-schedule.mocks");
const race_schedules_resolver_1 = require("../race-schedules-resolver");
jest.mock('@services/race-schedule.service', () => ({
    getRaceSchedules: jest.fn(),
}));
describe('RaceSchedulesResolver', () => {
    it('should return race schedules for a specific year', async () => {
        const getRaceSchedulesMock = jest.fn().mockResolvedValue(race_schedule_mocks_1.mockRaceSchedules);
        require('@services/race-schedule.service').getRaceSchedules =
            getRaceSchedulesMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [race_schedules_resolver_1.RaceSchedulesResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_RACE_SCHEDULES_QUERY = `
      query {
        raceSchedules(year: "2022") {
          season
          Races {
            season
            round
            url
            raceName
            date
            time
          }
        }
      }
    `;
        const response = await query({ query: GET_RACE_SCHEDULES_QUERY });
        expect(response.data?.raceSchedules).toEqual(race_schedule_mocks_1.mockRaceSchedules);
    });
    it('should return race schedules for the current year when year is not provided', async () => {
        const getRaceSchedulesMock = jest.fn().mockResolvedValue(race_schedule_mocks_1.mockRaceSchedules);
        require('@services/race-schedule.service').getRaceSchedules =
            getRaceSchedulesMock;
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [race_schedules_resolver_1.RaceSchedulesResolver],
        });
        const server = new apollo_server_express_1.ApolloServer({ schema });
        const { query } = (0, apollo_server_testing_1.createTestClient)(server);
        const GET_RACE_SCHEDULES_QUERY = `
      query {
        raceSchedules {
          season
          Races {
            season
            round
            url
            raceName
            date
            time
          }
        }
      }
    `;
        const response = await query({ query: GET_RACE_SCHEDULES_QUERY });
        expect(response.data?.raceSchedules).toEqual(race_schedule_mocks_1.mockRaceSchedules);
    });
});
