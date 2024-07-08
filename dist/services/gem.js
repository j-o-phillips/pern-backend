"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGem = void 0;
const createGem_1 = require("../utils/createGem");
const knex = require("../knex");
const createGem = async (gem, settlement_id) => {
    console.log(gem);
    console.log(settlement_id);
    const randomGem = (0, createGem_1.createRandomGem)();
    const input = {
        ...randomGem,
        settlement_id,
    };
    const newGem = await knex("gems").returning("*").insert(input);
    return newGem[0];
};
exports.createGem = createGem;
// export const fetchBuildingsBySettlementId = async (id) => {
//   const buildings = await knex("buildings").where("settlement_id", id);
//   return buildings;
// };
