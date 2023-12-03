import { type Season } from './../types/seasons.types';

const URL_BASE = 'https://ergast.com/api/f1';

const getSeasons = async (): Promise<Season[]> => {
  const url = `${URL_BASE}/seasons.json`;

  const response = await fetch(url).then(async (response) => {
    if (response.status !== 200) return undefined;

    return await response.json();
  });

  if (!response) {
    return undefined;
  }

  return response.MRData.SeasonTable.Seasons;
};

export { getSeasons };
