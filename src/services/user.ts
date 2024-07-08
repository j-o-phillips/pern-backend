const knex = require("../knex");

export const fetchAll = async () => {
  const users = await knex.select("*").from("users");
  return users;
};

export const createUser = async (user) => {
  const newUser = await knex("users").returning("*").insert(user);
  return newUser[0];
};

export const fetchUserById = async (id) => {
  const user = await knex("users").where("id", id);
  return user[0];
};

export const fetchUserByEmail = async (email) => {
  const user = await knex("users").where("email", email);
  return user[0];
};

export const updateUser = async (id, edits) => {
  console.log(id, edits);

  // Add all edits to an object
  const updates = {};
  Object.keys(edits).forEach((key) => {
    if (edits[key] !== undefined) {
      updates[key] = edits[key];
    }
  });

  console.log(updates);
  const user = await knex("users")
    .where("id", id)
    .update(updates, ["id", "email", "password", "first_name", "last_name"]);
  return user[0];
};
