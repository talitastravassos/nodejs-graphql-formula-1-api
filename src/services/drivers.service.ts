import { type Driver } from 'src/types/driver.types';

const URL_BASE = 'https://ergast.com/api/f1';

const getDrivers = async (
  year?: string,
  driverId?: string,
): Promise<Driver[]> => {
  const url = year
    ? `${URL_BASE}/${year}/drivers.json`
    : driverId
      ? `${URL_BASE}/drivers/${driverId}.json`
      : `${URL_BASE}/drivers.json`;

  const response = await fetch(url).then(async (response) => {
    if (response.status !== 200) return undefined;

    return await response.json();
  });

  if (!response) {
    return [];
  }

  return response.MRData.DriverTable.Drivers;
};

export { getDrivers };
