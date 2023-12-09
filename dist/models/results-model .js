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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.FastestLap = exports.ResultTime = exports.Constructor = exports.RaceResult = exports.Results = void 0;
const type_graphql_1 = require("type-graphql");
const circuits_model_1 = require("./circuits-model");
const driver_model_1 = require("./driver-model");
let Results = class Results {
};
exports.Results = Results;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Results.prototype, "season", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Results.prototype, "round", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [RaceResult], { nullable: true }),
    __metadata("design:type", Array)
], Results.prototype, "Races", void 0);
exports.Results = Results = __decorate([
    (0, type_graphql_1.ObjectType)()
], Results);
let RaceResult = class RaceResult {
};
exports.RaceResult = RaceResult;
__decorate([
    (0, type_graphql_1.Field)(() => [Result], { nullable: true }),
    __metadata("design:type", Array)
], RaceResult.prototype, "Results", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "season", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "round", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "raceName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => circuits_model_1.Circuit, { nullable: true }),
    __metadata("design:type", circuits_model_1.Circuit)
], RaceResult.prototype, "circuit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceResult.prototype, "time", void 0);
exports.RaceResult = RaceResult = __decorate([
    (0, type_graphql_1.ObjectType)()
], RaceResult);
let Constructor = class Constructor {
};
exports.Constructor = Constructor;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Constructor.prototype, "constructorId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Constructor.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Constructor.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Constructor.prototype, "nationality", void 0);
exports.Constructor = Constructor = __decorate([
    (0, type_graphql_1.ObjectType)()
], Constructor);
let ResultTime = class ResultTime {
};
exports.ResultTime = ResultTime;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResultTime.prototype, "millis", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResultTime.prototype, "time", void 0);
exports.ResultTime = ResultTime = __decorate([
    (0, type_graphql_1.ObjectType)()
], ResultTime);
let FastestLap = class FastestLap {
};
exports.FastestLap = FastestLap;
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FastestLap.prototype, "time", void 0);
exports.FastestLap = FastestLap = __decorate([
    (0, type_graphql_1.ObjectType)()
], FastestLap);
let Result = class Result {
};
exports.Result = Result;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "position", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "positionText", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "points", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => driver_model_1.Driver),
    __metadata("design:type", driver_model_1.Driver)
], Result.prototype, "Driver", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Constructor),
    __metadata("design:type", Constructor)
], Result.prototype, "Constructor", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ResultTime, { nullable: true }),
    __metadata("design:type", ResultTime)
], Result.prototype, "Time", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FastestLap, { nullable: true }),
    __metadata("design:type", FastestLap)
], Result.prototype, "FastestLap", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "grid", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Result.prototype, "laps", void 0);
exports.Result = Result = __decorate([
    (0, type_graphql_1.ObjectType)()
], Result);
