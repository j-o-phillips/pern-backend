import { makeExecutableSchema } from "@graphql-tools/schema";

import * as account from "./resolvers/account/accountGQL";

export const schema = makeExecutableSchema({
  typeDefs: account.typeDefs,
  resolvers: {
    ...account.resolvers,
  },
});
