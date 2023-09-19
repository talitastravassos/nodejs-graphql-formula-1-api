"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const race_schedule_service_1 = require("@services/race-schedule.service");
describe('getRaceSchedules', () => {
    it('fetches race schedules for a specific year', async () => {
        const year = '2023';
        const schedules = await (0, race_schedule_service_1.getRaceSchedules)(year);
        expect(schedules).toBeDefined();
        expect(schedules.Races.length).toBeGreaterThan(0);
    });
    it('fetches race schedules for the current year', async () => {
        const schedules = await (0, race_schedule_service_1.getRaceSchedules)();
        expect(schedules).toBeDefined();
        expect(schedules.Races.length).toBeGreaterThan(0);
    });
    it('returns undefined for invalid year', async () => {
        const year = 'invalid-year';
        const schedules = await (0, race_schedule_service_1.getRaceSchedules)(year);
        expect(schedules).toBeUndefined();
    });
    it('returns undefined for non-200 response status', async () => {
        global.fetch = jest.fn().mockResolvedValue({ status: 404 });
        const schedules = await (0, race_schedule_service_1.getRaceSchedules)('2023');
        expect(schedules).toBeUndefined();
    });
});
