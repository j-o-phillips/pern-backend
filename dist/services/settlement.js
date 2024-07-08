"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettlement = exports.createSettlement = exports.fetchSettlementByUserId = void 0;
const knex = require("../knex");
const fetchSettlementByUserId = async (id) => {
    const settlement = await knex("settlements").where("user_id", id).first();
    return settlement;
};
exports.fetchSettlementByUserId = fetchSettlementByUserId;
const createSettlement = async (settlement) => {
    const newSettlement = await knex("settlements")
        .returning("*")
        .insert(settlement);
    console.log(newSettlement);
    return newSettlement[0];
};
exports.createSettlement = createSettlement;
const updateSettlement = async (id, edits) => {
    // Add all edits to an object
    const updates = {};
    Object.keys(edits).forEach((key) => {
        if (edits[key] !== undefined) {
            updates[key] = edits[key];
        }
    });
    const settlement = await knex("settlements")
        .where("id", id)
        .update(updates, [
        "id",
        "user_id",
        "name",
        "population",
        "gold",
        "food",
        "wood",
        "stone",
        "time_points",
        "blocks",
    ]);
    return settlement[0];
};
exports.updateSettlement = updateSettlement;
