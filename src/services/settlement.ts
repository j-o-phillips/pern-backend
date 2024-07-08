const knex = require("../knex");

export const fetchSettlementByUserId = async (id) => {
  const settlement = await knex("settlements").where("user_id", id).first();
  return settlement;
};

export const createSettlement = async (settlement) => {
  const newSettlement = await knex("settlements")
    .returning("*")
    .insert(settlement);
  console.log(newSettlement);
  return newSettlement[0];
};

export const updateSettlement = async (id, edits) => {
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
