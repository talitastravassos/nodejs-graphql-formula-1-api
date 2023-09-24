import 'reflect-metadata';
/* eslint-disable @typescript-eslint/no-var-requires */
import { CircuitsResolver } from '@resolvers/circuits-resolver';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { buildSchema } from 'type-graphql';
import { mockCircuits } from '../../__mocks__/circuits.mocks';

jest.mock('@services/circuits.service', () => ({
  getCircuits: jest.fn(),
}));

describe('CircuitsResolver', () => {
  it('should return circuits for a specific year and circuitId', async () => {
    const getCircuitsMock = jest.fn().mockResolvedValue(mockCircuits);
    require('@services/circuits.service').getCircuits = getCircuitsMock;

    const schema = await buildSchema({
      resolvers: [CircuitsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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

    expect(response.data?.circuits).toEqual(mockCircuits);
  });

  it('should return circuits for a specific year when circuitId is not provided', async () => {
    const getCircuitsMock = jest.fn().mockResolvedValue(mockCircuits);
    require('@services/circuits.service').getCircuits = getCircuitsMock;

    const schema = await buildSchema({
      resolvers: [CircuitsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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

    expect(response.data?.circuits).toEqual(mockCircuits);
  });

  it('should return circuits for a specific circuitId when year is not provided', async () => {
    const getCircuitsMock = jest.fn().mockResolvedValue(mockCircuits);
    require('@services/circuits.service').getCircuits = getCircuitsMock;

    const schema = await buildSchema({
      resolvers: [CircuitsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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

    expect(response.data?.circuits).toEqual(mockCircuits);
  });

  it('should return null when both year and circuitId are not provided', async () => {
    const getCircuitsMock = jest.fn().mockResolvedValue(null);
    require('@services/circuits.service').getCircuits = getCircuitsMock;

    const schema = await buildSchema({
      resolvers: [CircuitsResolver],
    });

    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server as any);

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
