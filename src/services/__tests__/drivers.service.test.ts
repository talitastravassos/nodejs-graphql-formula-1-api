import { getDrivers } from '@services/drivers.service';

describe('getDrivers', () => {
  it('fetches drivers for a specific year', async () => {
    const year = '2023';
    const drivers = await getDrivers(year);
    expect(drivers).toBeDefined();
    expect(drivers.length).toBeGreaterThan(0);
  });

  it('fetches a specific driver by ID', async () => {
    const driverId = 'hamilton';
    const drivers = await getDrivers(undefined, driverId);
    expect(drivers).toBeDefined();
    expect(drivers.length).toBe(1);
    expect(drivers[0].driverId).toBe(driverId);
  });

  it('fetches all drivers', async () => {
    const drivers = await getDrivers();
    expect(drivers).toBeDefined();
    expect(drivers.length).toBeGreaterThan(0);
  });

  it('returns an empty array for invalid year', async () => {
    const year = 'invalid-year';
    const drivers = await getDrivers(year);
    expect(drivers).toBeDefined();
    expect(drivers.length).toBe(0);
  });

  it('returns an empty array for non-existent driver ID', async () => {
    const driverId = 'non-existent-id';
    const drivers = await getDrivers(undefined, driverId);
    expect(drivers).toBeDefined();
    expect(drivers.length).toBe(0);
  });
});
