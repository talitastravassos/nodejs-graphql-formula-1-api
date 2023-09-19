"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const drivers_resolver_1 = require("./resolvers/drivers-resolver");
const race_schedules_resolver_1 = require("./resolvers/race-schedules-resolver");
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [drivers_resolver_1.DriversResolver, race_schedules_resolver_1.RaceSchedulesResolver],
        emitSchemaFile: path_1.default.resolve(__dirname, 'schema.gql'),
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
    });
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
}
void bootstrap();
