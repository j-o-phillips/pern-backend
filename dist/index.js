"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const knex = require("./knex");
const schema_1 = require("./gql/schema");
//server setup
const server = new server_1.ApolloServer({
    schema: schema_1.schema,
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
})
    .then(({ url }) => {
    console.log(`Server is running at ${url}`);
})
    .catch((error) => {
    console.error("Error starting the server:", error);
});
