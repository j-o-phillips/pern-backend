"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.resolvers = exports.typeDefs = void 0;
const schema_1 = require("@graphql-tools/schema");
exports.typeDefs = `#graphql
     type Query {
       accounts: [Account]
    }

    type Account {
        id: Int!
        name: String!
        email: String!
    }

    type Mutation {
        createAccount(name: String!, email: String!): Account
    }
`;
exports.resolvers = {
    Query: {
        accounts: () => {
            return {
                id: 1,
                name: "test",
                email: "",
            };
        },
    },
    Mutation: {
        createAccount: (_parent, args) => {
            return {
                id: 1,
                name: args.name,
                email: args.email,
            };
        },
    },
};
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: exports.typeDefs,
    resolvers: {},
});
