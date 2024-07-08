/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("buildings", (table) => {
    table.increments("id").primary();
    table.integer("settlement_id").notNullable();
    table.string("type").notNullable();
    table.integer("level").notNullable();
    table.integer("max_level").notNullable();
    table.integer("production_type_one").notNullable();
    table.integer("production_type_two");
    table.integer("production_type_three");
    table.integer("production_amount_one").notNullable();
    table.integer("production_amount_two");
    table.integer("production_amount_three");
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
  return knex.schema.dropTable("buildings");
};
