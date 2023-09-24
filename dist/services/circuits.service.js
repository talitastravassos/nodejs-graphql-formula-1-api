"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircuits = void 0;
const URL_BASE = 'https://ergast.com/api/f1';
const getCircuits = async (year, circuitId) => {
    const url = year
        ? `${URL_BASE}/${year}/circuits.json`
        : circuitId
            ? `${URL_BASE}/circuits/${circuitId}.json`
            : `${URL_BASE}/circuits.json`;
    const response = await fetch(url).then(async (response) => {
        if (response.status !== 200)
            return undefined;
        return await response.json();
    });
    if (!response) {
        return undefined;
    }
    return response.MRData.CircuitTable;
};
exports.getCircuits = getCircuits;
