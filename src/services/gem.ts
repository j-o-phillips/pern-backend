import { createRandomGem } from "../utils/createGem";

const knex = require("../knex");

export const createGem = async (gem, settlement_id) => {
  console.log(gem);
  console.log(settlement_id);

  const randomGem = createRandomGem();
  const input = {
    ...randomGem,
    settlement_id,
  };

  const newGem = await knex("gems").returning("*").insert(input);

  return newGem[0];
};

// export const fetchBuildingsBySettlementId = async (id) => {
//   const buildings = await knex("buildings").where("settlement_id", id);
//   return buildings;
// };
