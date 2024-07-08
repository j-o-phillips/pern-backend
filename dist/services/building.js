"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBuildingsBySettlementId = exports.createBuilding = void 0;
const knex = require("../knex");
const createBuilding = async (building) => {
    const newBuilding = await knex("buildings").returning("*").insert(building);
    console.log(newBuilding);
    return newBuilding[0];
};
exports.createBuilding = createBuilding;
const fetchBuildingsBySettlementId = async (id) => {
    const buildings = await knex("buildings").where("settlement_id", id);
    return buildings;
};
exports.fetchBuildingsBySettlementId = fetchBuildingsBySettlementId;
