export const typeDefs = `#graphql
    type User {
        id: ID!
        email: String!
        password: String!
        first_name: String!
        last_name: String! 
        settlement: Settlement
    }

    type Settlement {
        id: ID!
        user_id: ID!
        name: String!
        population: Int!
        gold: Int!
        food: Int!
        wood: Int!
        stone: Int!
        time_points: Int!

        blocks: String
        buildings: [Building!]
        gems: [Gem!]

        user: User!
    }

    type Query {
        users: [User]
        userById(id: ID!): User
        userByEmail(email: String!): User
        settlements: [Settlement!]!
        settlement(id: ID!): Settlement

        building(id: ID!): Building
       
       
    }

    type Mutation {
        addUser(user: addUserInput): User
        updateUser(id: ID!, edits: editUserInput!): User
        addSettlement(settlement: addSettlementInput!): Settlement
        updateSettlement(id: ID!, edits: EditSettlementInput!): Settlement

        createBuilding(building: BuildingInput!): Building

        createGem(gem: GemInput!, settlement_id: ID!): Gem
    }

    input addUserInput {
        email: String!
        password: String!
        first_name: String!
        last_name: String!
    }

    input editUserInput {
        email: String
        password: String
        first_name: String
        last_name: String
    }

    input addSettlementInput {
        user_id: Int!
        name: String!
        population: Int!
        gold: Int!
        food: Int!
        time_points: Int!
    }

    input EditSettlementInput {
        name: String
        population: Int
        gold: Int
        food: Int
        wood: Int
        stone: Int
        time_points: Int
        blocks: String
    }

    type Building {
        id: ID!
        type: String!
        settlement_id: ID!
        level: Int!
        max_level: Int!
        production_type_one: String!
        production_type_two: String
        production_type_three: String
        production_amount_one: Int!
        production_amount_two: Int
        production_amount_three: Int
        condition: Int!
        upgrade_cost: String!

        settlement: Settlement!
    }

    input BuildingInput {
        settlement_id: ID!
        type: String!
        level: Int!
        max_level: Int!
        production_type_one: String!
        production_type_two: String
        production_type_three: String
        production_amount_one: Int!
        production_amount_two: Int
        production_amount_three: Int
        condition: Int!
        upgrade_cost: String!

    }   

    type Gem {
        id: ID!
        settlement_id: ID!
        name: String!
        damage_type: String!
        power: Int!
    }

    input GemInput {
        settlement_id: ID!
    }
`;
