/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("vegetable_plots", (table) => {
    table.increments("id").primary();
    table.integer("settlement_id").notNullable();
    table.integer("level").notNullable();
    table.integer("max_level").notNullable();
    table.integer("production").notNullable();
    table.integer("condition").notNullable();
    table.string("upgrade_cost");

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
  return knex.schema.dropTable("vegetable_plots");
};
