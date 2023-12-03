import { getSeasons } from '@services/seasons.service';

describe('getSeasons', () => {
  it('fetches all seasons', async () => {
    const seasons = await getSeasons();
    expect(seasons).toBeDefined();
    expect(seasons.length).toBeGreaterThan(0);
  });
});
