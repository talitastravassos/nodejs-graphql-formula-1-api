"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrivers = void 0;
const URL_BASE = 'https://ergast.com/api/f1';
const getDrivers = async (year, driverId) => {
    const url = year
        ? `${URL_BASE}/${year}/drivers.json`
        : driverId
            ? `${URL_BASE}/drivers/${driverId}.json`
            : `${URL_BASE}/drivers.json`;
    const response = await fetch(url).then(async (response) => {
        if (response.status !== 200)
            return undefined;
        return await response.json();
    });
    if (!response) {
        return [];
    }
    return response.MRData.DriverTable.Drivers;
};
exports.getDrivers = getDrivers;
