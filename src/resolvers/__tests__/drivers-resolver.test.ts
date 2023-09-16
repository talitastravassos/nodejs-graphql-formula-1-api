/* eslint-disable @typescript-eslint/no-var-requires */
import { type Driver } from '@models/driver-model';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DriversResolver } from '../drivers-resolver';

jest.mock('@services/drivers.service', () => ({
  getDrivers: jest.fn(),
}));

describe('DriversResolver', () => {
  it('should return a list of drivers', async () => {
    const mockDrivers: Driver[] = [
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

    const schema = await buildSchema({
      resolvers: [DriversResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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
