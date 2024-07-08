/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("settlements", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.string("name").notNullable();
    table.integer("population").notNullable();
    table.integer("gold").notNullable();
    table.integer("food").notNullable();
    table.foreign("user_id").references("users.id").delete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("settlements");
};
