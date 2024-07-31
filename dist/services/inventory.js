"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInventoryPotion = exports.createInventoryBlock = exports.fetchInventoryByUserId = void 0;
const knex = require("../knex");
const fetchInventoryByUserId = async (id) => {
    const blocks = await knex("inventory_blocks").where("user_id", id);
    const potions = await knex("inventory_potions").where("user_id", id);
    const inventory = [...blocks, ...potions];
    console.log(inventory);
    return inventory;
};
exports.fetchInventoryByUserId = fetchInventoryByUserId;
const createInventoryBlock = async (inventoryBlock, user_id) => {
    const input = {
        ...inventoryBlock,
        user_id,
    };
    const newInventoryBlock = await knex("inventory_blocks")
        .returning("*")
        .insert(input);
    return newInventoryBlock[0];
};
exports.createInventoryBlock = createInventoryBlock;
const createInventoryPotion = async (inventoryPotion, user_id) => {
    const input = {
        ...inventoryPotion,
        user_id,
    };
    const newInventoryPotion = await knex("inventory_potions")
        .returning("*")
        .insert(input);
    return newInventoryPotion[0];
};
exports.createInventoryPotion = createInventoryPotion;
