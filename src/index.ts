import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const knex = require("./knex");

import { typeDefs } from "./schema.js";

import * as userService from "./services/user";
import * as settlementService from "./services/settlement";
import * as buildingService from "./services/building";
import * as gemService from "./services/gem";
import * as inventoryService from "./services/inventory";

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
    inventory: (parent) => {
      return inventoryService.fetchInventoryByUserId(parent.id);
    },
  },
  InventoryItem: {
    __resolveType: (obj) => {
      if (obj.type === "block") {
        return "InventoryBlock";
      }

      if (obj.type === "potion") {
        return "InventoryPotion";
      }
      return null;
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
    createInventoryBlock(_parent, args) {
      return inventoryService.createInventoryBlock(
        args.inventoryBlock,
        args.user_id
      );
    },
    createInventoryPotion(_parent, args) {
      return inventoryService.createInventoryPotion(
        args.inventoryPotion,
        args.user_id
      );
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
