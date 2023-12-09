"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = void 0;
const URL_BASE = 'https://ergast.com/api/f1';
const getResults = async (year, roundId) => {
    const url = year
        ? `${URL_BASE}/${year}/results.json`
        : roundId && year
            ? `${URL_BASE}/${year}/${roundId}/results.json`
            : `${URL_BASE}/current/last/results.json`;
    const response = await fetch(url).then(async (response) => {
        if (response.status !== 200)
            return undefined;
        return await response.json();
    });
    if (!response) {
        return undefined;
    }
    return response.MRData.RaceTable;
};
exports.getResults = getResults;
