"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const circuits_resolver_1 = require("./circuits-resolver");
const drivers_resolver_1 = require("./drivers-resolver");
const race_schedules_resolver_1 = require("./race-schedules-resolver");
exports.resolvers = [
    drivers_resolver_1.DriversResolver,
    race_schedules_resolver_1.RaceSchedulesResolver,
    circuits_resolver_1.CircuitsResolver,
];
