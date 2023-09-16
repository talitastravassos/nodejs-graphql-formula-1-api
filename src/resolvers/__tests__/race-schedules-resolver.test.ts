/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { mockRaceSchedules } from '../../__mocks__/race-schedule.mocks';
import { RaceSchedulesResolver } from '../race-schedules-resolver';

jest.mock('@services/race-schedule.service', () => ({
  getRaceSchedules: jest.fn(),
}));

describe('RaceSchedulesResolver', () => {
  it('should return race schedules for a specific year', async () => {
    const getRaceSchedulesMock = jest.fn().mockResolvedValue(mockRaceSchedules);
    require('@services/race-schedule.service').getRaceSchedules =
      getRaceSchedulesMock;

    const schema = await buildSchema({
      resolvers: [RaceSchedulesResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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

    expect(response.data?.raceSchedules).toEqual(mockRaceSchedules);
  });

  it('should return race schedules for the current year when year is not provided', async () => {
    const getRaceSchedulesMock = jest.fn().mockResolvedValue(mockRaceSchedules);
    require('@services/race-schedule.service').getRaceSchedules =
      getRaceSchedulesMock;

    const schema = await buildSchema({
      resolvers: [RaceSchedulesResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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

    expect(response.data?.raceSchedules).toEqual(mockRaceSchedules);
  });
});
