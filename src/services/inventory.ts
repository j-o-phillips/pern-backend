const knex = require("../knex");

export const fetchInventoryByUserId = async (id) => {
  const blocks = await knex("inventory_blocks").where("user_id", id);
  const potions = await knex("inventory_potions").where("user_id", id);
  const inventory = [...blocks, ...potions];
  return inventory;
};

export const createInventoryBlock = async (inventoryBlock, user_id) => {
  const input = {
    ...inventoryBlock,
    user_id,
  };
  const newInventoryBlock = await knex("inventory_blocks")
    .returning("*")
    .insert(input);
  return newInventoryBlock[0];
};

export const createInventoryPotion = async (inventoryPotion, user_id) => {
  const input = {
    ...inventoryPotion,
    user_id,
  };
  const newInventoryPotion = await knex("inventory_potions")
    .returning("*")
    .insert(input);
  return newInventoryPotion[0];
};
