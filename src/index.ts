import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const knex = require("./knex");

import { typeDefs } from "./schema.js";

import * as userService from "./services/user";
import * as settlementService from "./services/settlement";
import * as buildingService from "./services/building";
import * as gemService from "./services/gem";

const resolvers = {
  Query: {
    users() {
      return userService.fetchAll();
    },
    userById(_parent, args) {
      return userService.fetchUserById(args.id);
    },
    userByEmail(_parent, args) {
      return userService.fetchUserByEmail(args.email);
    },
  },
  User: {
    settlement: (parent) => {
      //parent is the returned value of the parent resolver ie. the individual game
      return settlementService.fetchSettlementByUserId(parent.id);
    },
  },
  Settlement: {
    buildings: (parent) => {
      return buildingService.fetchBuildingsBySettlementId(parent.id);
    },
  },

  Mutation: {
    addUser(_parent, args) {
      return userService.createUser(args.user);
    },
    updateUser(_parent, args) {
      return userService.updateUser(args.id, args.edits);
    },
    addSettlement(_parent, args) {
      return settlementService.createSettlement(args.settlement);
    },
    updateSettlement(_parent, args) {
      return settlementService.updateSettlement(args.id, args.edits);
    },
    createBuilding(_parent, args) {
      return buildingService.createBuilding(args.building);
    },
    createGem(_parent, args) {
      return gemService.createGem(args.gem, args.settlement_id);
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
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
