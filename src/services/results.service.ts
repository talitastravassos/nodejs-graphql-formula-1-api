import { type Results } from 'src/types/results.types';

const URL_BASE = 'https://ergast.com/api/f1';

const getResults = async (
  year?: string,
  roundId?: string,
): Promise<Results> => {
  const url = year
    ? `${URL_BASE}/${year}/results.json`
    : roundId && year
      ? `${URL_BASE}/${year}/${roundId}/results.json`
      : `${URL_BASE}/current/last/results.json`;

  const response = await fetch(url).then(async (response) => {
    if (response.status !== 200) return undefined;

    return await response.json();
  });
  console.log(
    '🚀 ~ file: results.service.ts:20 ~ response ~ response:',
    response,
  );

  if (!response) {
    return null;
  }

  return response.MRData.RaceTable;
};

export { getResults };
