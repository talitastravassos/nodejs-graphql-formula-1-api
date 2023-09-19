"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drivers_service_1 = require("@services/drivers.service");
describe('getDrivers', () => {
    it('fetches drivers for a specific year', async () => {
        const year = '2023';
        const drivers = await (0, drivers_service_1.getDrivers)(year);
        expect(drivers).toBeDefined();
        expect(drivers.length).toBeGreaterThan(0);
    });
    it('fetches a specific driver by ID', async () => {
        const driverId = 'hamilton';
        const drivers = await (0, drivers_service_1.getDrivers)(undefined, driverId);
        expect(drivers).toBeDefined();
        expect(drivers.length).toBe(1);
        expect(drivers[0].driverId).toBe(driverId);
    });
    it('fetches all drivers', async () => {
        const drivers = await (0, drivers_service_1.getDrivers)();
        expect(drivers).toBeDefined();
        expect(drivers.length).toBeGreaterThan(0);
    });
    it('returns an empty array for invalid year', async () => {
        const year = 'invalid-year';
        const drivers = await (0, drivers_service_1.getDrivers)(year);
        expect(drivers).toBeDefined();
        expect(drivers.length).toBe(0);
    });
    it('returns an empty array for non-existent driver ID', async () => {
        const driverId = 'non-existent-id';
        const drivers = await (0, drivers_service_1.getDrivers)(undefined, driverId);
        expect(drivers).toBeDefined();
        expect(drivers.length).toBe(0);
    });
});
