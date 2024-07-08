import { log } from "console";

const knex = require("../knex");

export const createBuilding = async (building) => {
  const newBuilding = await knex("buildings").returning("*").insert(building);
  console.log(newBuilding);

  return newBuilding[0];
};

export const fetchBuildingsBySettlementId = async (id) => {
  const buildings = await knex("buildings").where("settlement_id", id);
  return buildings;
};
