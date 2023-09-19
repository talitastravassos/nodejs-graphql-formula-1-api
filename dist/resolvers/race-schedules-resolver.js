"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceSchedulesResolver = void 0;
const race_schedule_service_1 = require("@services/race-schedule.service");
const type_graphql_1 = require("type-graphql");
const race_schedule_model_1 = require("./../models/race-schedule-model");
let RaceSchedulesResolver = class RaceSchedulesResolver {
    async raceSchedules(year) {
        const schedules = await (0, race_schedule_service_1.getRaceSchedules)(year);
        return schedules;
    }
};
exports.RaceSchedulesResolver = RaceSchedulesResolver;
__decorate([
    (0, type_graphql_1.Query)(() => race_schedule_model_1.RaceSchedules, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('year', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RaceSchedulesResolver.prototype, "raceSchedules", null);
exports.RaceSchedulesResolver = RaceSchedulesResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RaceSchedulesResolver);
