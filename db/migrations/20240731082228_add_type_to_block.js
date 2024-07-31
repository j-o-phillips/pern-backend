/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("inventory_blocks", (table) => {
    table.string("type").notNullable().defaultTo("block");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("inventory_blocks", (table) => {
    table.dropColumn("type");
  });
};
