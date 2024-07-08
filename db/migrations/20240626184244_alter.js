/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("buildings", (table) => {
    table.string("production_type_one").alter();
    table.string("production_type_two").alter();
    table.string("production_type_three").alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("buildings", (table) => {
    table.integer("production_type_one").alter();
    table.integer("production_type_two").alter();
    table.integer("production_type_three").alter();
  });
};
