"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.fetchUserByEmail = exports.fetchUserById = exports.createUser = exports.fetchAll = void 0;
const knex = require("../knex");
const fetchAll = async () => {
    const users = await knex.select("*").from("users");
    return users;
};
exports.fetchAll = fetchAll;
const createUser = async (user) => {
    const newUser = await knex("users").returning("*").insert(user);
    return newUser[0];
};
exports.createUser = createUser;
const fetchUserById = async (id) => {
    const user = await knex("users").where("id", id);
    return user[0];
};
exports.fetchUserById = fetchUserById;
const fetchUserByEmail = async (email) => {
    const user = await knex("users").where("email", email);
    return user[0];
};
exports.fetchUserByEmail = fetchUserByEmail;
const updateUser = async (id, edits) => {
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
exports.updateUser = updateUser;
