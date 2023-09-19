"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaceSchedules = void 0;
const URL_BASE = 'https://ergast.com/api/f1';
const getRaceSchedules = async (year) => {
    const url = year ? `${URL_BASE}/${year}.json` : `${URL_BASE}/current.json`;
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
exports.getRaceSchedules = getRaceSchedules;
