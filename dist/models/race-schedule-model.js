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
exports.Race = exports.FirstPractice = exports.Circuit = exports.Location = exports.RaceSchedules = void 0;
const type_graphql_1 = require("type-graphql");
let RaceSchedules = class RaceSchedules {
};
exports.RaceSchedules = RaceSchedules;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RaceSchedules.prototype, "season", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Race], { nullable: true }),
    __metadata("design:type", Array)
], RaceSchedules.prototype, "Races", void 0);
exports.RaceSchedules = RaceSchedules = __decorate([
    (0, type_graphql_1.ObjectType)()
], RaceSchedules);
let Location = class Location {
};
exports.Location = Location;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Location.prototype, "lat", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Location.prototype, "long", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Location.prototype, "locality", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Location.prototype, "country", void 0);
exports.Location = Location = __decorate([
    (0, type_graphql_1.ObjectType)()
], Location);
let Circuit = class Circuit {
};
exports.Circuit = Circuit;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Circuit.prototype, "circuitId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Circuit.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Circuit.prototype, "circuitName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Location),
    __metadata("design:type", Location)
], Circuit.prototype, "location", void 0);
exports.Circuit = Circuit = __decorate([
    (0, type_graphql_1.ObjectType)()
], Circuit);
let FirstPractice = class FirstPractice {
};
exports.FirstPractice = FirstPractice;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FirstPractice.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FirstPractice.prototype, "time", void 0);
exports.FirstPractice = FirstPractice = __decorate([
    (0, type_graphql_1.ObjectType)()
], FirstPractice);
let Race = class Race {
};
exports.Race = Race;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "season", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "round", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "raceName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Circuit, { nullable: true }),
    __metadata("design:type", Circuit)
], Race.prototype, "circuit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Race.prototype, "time", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FirstPractice, { nullable: true }),
    __metadata("design:type", FirstPractice)
], Race.prototype, "firstPractice", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FirstPractice, { nullable: true }),
    __metadata("design:type", FirstPractice)
], Race.prototype, "secondPractice", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FirstPractice, { nullable: true }),
    __metadata("design:type", FirstPractice)
], Race.prototype, "thirdPractice", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FirstPractice, { nullable: true }),
    __metadata("design:type", FirstPractice)
], Race.prototype, "qualifying", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FirstPractice, { nullable: true }),
    __metadata("design:type", FirstPractice)
], Race.prototype, "sprint", void 0);
exports.Race = Race = __decorate([
    (0, type_graphql_1.ObjectType)()
], Race);
