import { type RaceSchedules } from './../types/race.types';

const URL_BASE = 'https://ergast.com/api/f1';

const getRaceSchedules = async (year?: string): Promise<RaceSchedules> => {
  const url = year ? `${URL_BASE}/${year}.json` : `${URL_BASE}/current.json`;

  const response = await fetch(url).then(async (response) => {
    if (response.status !== 200) return undefined;

    return await response.json();
  });

  if (!response) {
    return undefined;
  }

  return response.MRData.RaceTable;
};

export { getRaceSchedules };
