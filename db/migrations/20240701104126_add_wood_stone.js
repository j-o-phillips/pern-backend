/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("settlements", (table) => {
    table.integer("wood").defaultTo(0);
    table.integer("stone").defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("settlements", (table) => {
    table.dropColumn("wood");
    table.dropColumn("stone");
  });
};
