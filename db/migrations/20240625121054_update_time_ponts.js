/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .alterTable("settlements", (table) => {
      table.integer("time_points").defaultTo(100);
    })
    .then(function () {
      return knex.schema.alterTable("users", (table) => {
        table.dropColumn("time_points");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("users", (table) => {
      table.integer("time_points").defaultTo(100);
    })
    .then(function () {
      return knex.schema.alterTable("settlements", (table) => {
        table.dropColumn("time_points");
      });
    });
};
