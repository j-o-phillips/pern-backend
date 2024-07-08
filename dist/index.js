"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const knex = require("./knex");
const schema_js_1 = require("./schema.js");
const userService = __importStar(require("./services/user"));
const settlementService = __importStar(require("./services/settlement"));
const buildingService = __importStar(require("./services/building"));
const gemService = __importStar(require("./services/gem"));
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
const server = new server_1.ApolloServer({
    typeDefs: schema_js_1.typeDefs,
    resolvers,
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
