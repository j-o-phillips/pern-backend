import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const knex = require("./knex");

import { schema } from "./gql/schema";

//server setup
const server = new ApolloServer({
  schema,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(`Server is running at ${url}`);
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });
