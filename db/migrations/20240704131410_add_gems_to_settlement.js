/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("gems", (table) => {
    table.increments("id").primary();
    table.integer("settlement_id").notNullable();
    table.string("name").notNullable();
    table.integer("power").notNullable();
    table.string("damage_type");
    table
      .foreign("settlement_id")
      .references("settlements.id")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("gems");
};
