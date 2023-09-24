"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
require("module-alias/register");
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [...resolvers_1.resolvers],
        emitSchemaFile: path_1.default.resolve(__dirname, 'schema.gql'),
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
        introspection: true,
    });
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
}
void bootstrap();
