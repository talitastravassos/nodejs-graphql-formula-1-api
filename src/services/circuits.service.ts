import { type Circuits } from 'src/types/circuits.types';

const URL_BASE = 'https://ergast.com/api/f1';

const getCircuits = async (
  year?: string,
  circuitId?: string,
): Promise<Circuits> => {
  const url = year
    ? `${URL_BASE}/${year}/circuits.json`
    : circuitId
      ? `${URL_BASE}/circuits/${circuitId}.json`
      : `${URL_BASE}/circuits.json`;

  const response = await fetch(url).then(async (response) => {
    if (response.status !== 200) return undefined;

    return await response.json();
  });

  if (!response) {
    return undefined;
  }

  return response.MRData.CircuitTable;
};

export { getCircuits };
