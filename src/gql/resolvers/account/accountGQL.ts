import * as accountService from "../../../services/account";

// SCHEMA

export const typeDefs = `#graphql
     type Query {
       accounts: [Account]
       accountByEmail(email: String!): Account
    }

    type Account {
        id: Int!
        username: String!
        email: String!
        role: String!
    }

    input createAccountInput {
        email: String!
        username: String!
        
    }

    type Mutation {
        createAccount(account: createAccountInput): Account
        deleteAccount(email: String!): Account
    }
`;

// RESOLVERS

export const resolvers = {
  Query: {
    accounts: () => {
      return accountService.fetchAllAccounts();
    },
    accountByEmail: (_parent, { email }) => {
      return accountService.fetchByEmail(email);
    },
  },
  Mutation: {
    createAccount: (_parent, args) => {
      return accountService.createAccount(args.account);
    },
    deleteAccount: (_parent, { email }) => {
      console.log(email);
      return accountService.deleteAccount(email);
    },
  },
};
