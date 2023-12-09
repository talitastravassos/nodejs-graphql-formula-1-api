"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const results_service_1 = require("@services/results.service");
describe('getResults', () => {
    it('fetches race results for a specific year', async () => {
        const year = '2023';
        const results = await (0, results_service_1.getResults)(year);
        expect(results).toBeDefined();
        expect(results.Races.length).toBeGreaterThan(0);
    });
    it('fetches race results for the current year', async () => {
        const results = await (0, results_service_1.getResults)();
        expect(results).toBeDefined();
        expect(results.Races.length).toBeGreaterThan(0);
    });
    it('returns undefined for invalid year', async () => {
        const year = 'invalid-year';
        const results = await (0, results_service_1.getResults)(year);
        expect(results).toBeUndefined();
    });
    it('returns undefined for non-200 response status', async () => {
        global.fetch = jest.fn().mockResolvedValue({ status: 404 });
        const results = await (0, results_service_1.getResults)('2023');
        expect(results).toBeUndefined();
    });
});
