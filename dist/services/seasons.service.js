"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeasons = void 0;
const URL_BASE = 'https://ergast.com/api/f1';
const getSeasons = async () => {
    const url = `${URL_BASE}/seasons.json`;
    const response = await fetch(url).then(async (response) => {
        if (response.status !== 200)
            return undefined;
        return await response.json();
    });
    if (!response) {
        return undefined;
    }
    return response.MRData.SeasonTable.Seasons;
};
exports.getSeasons = getSeasons;
