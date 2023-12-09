"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seasons_service_1 = require("@services/seasons.service");
describe('getSeasons', () => {
    it('fetches all seasons', async () => {
        const seasons = await (0, seasons_service_1.getSeasons)();
        expect(seasons).toBeDefined();
        expect(seasons.length).toBeGreaterThan(0);
    });
});
