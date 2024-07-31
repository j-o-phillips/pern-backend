/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("inventory_potions", (table) => {
    table.string("type").notNullable().defaultTo("potion");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("inventory_potions", (table) => {
    table.dropColumn("type");
  });
};
