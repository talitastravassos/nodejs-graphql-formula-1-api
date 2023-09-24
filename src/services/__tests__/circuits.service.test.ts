import { getCircuits } from '@services/circuits.service';

describe('getCircuits', () => {
  it('fetches circuits for a specific year', async () => {
    const year = '2023';
    const circuits = await getCircuits(year);

    expect(circuits).toBeDefined();
    expect(circuits.Circuits.length).toBeGreaterThan(0);
  });

  it('fetches a specific circuit by ID', async () => {
    const circuitId = 'monza';
    const circuits = await getCircuits(undefined, circuitId);
    expect(circuits).toBeDefined();
    expect(circuits.Circuits.length).toBe(1);
    expect(circuits.Circuits[0].circuitId).toBe(circuitId);
  });

  it('fetches all circuits', async () => {
    const circuits = await getCircuits();
    expect(circuits).toBeDefined();
    expect(circuits.Circuits.length).toBeGreaterThan(0);
  });

  it('returns undefined for invalid year', async () => {
    const year = 'invalid-year';
    const circuits = await getCircuits(year);
    expect(circuits).toBeUndefined();
  });

  it('returns undefined for non-existent circuit ID', async () => {
    const circuitId = 'non-existent-id';
    const circuits = await getCircuits(undefined, circuitId);

    expect(circuits.Circuits.length).toBe(0);
  });

  it('returns undefined for non-200 response status', async () => {
    global.fetch = jest.fn().mockResolvedValue({ status: 404 });

    const circuits = await getCircuits('2023');
    expect(circuits).toBeUndefined();
  });
});
