"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.createAccount = exports.fetchByEmail = exports.fetchAllAccounts = void 0;
const knex = require("../knex");
const fetchAllAccounts = async () => {
    return knex("account").returning("*");
};
exports.fetchAllAccounts = fetchAllAccounts;
const fetchByEmail = async (email) => {
    return knex("account").where("email", email).first().returning("*");
};
exports.fetchByEmail = fetchByEmail;
const createAccount = async (account) => {
    const input = {
        ...account,
        role: "admin",
    };
    const newAccount = await knex("account").returning("*").insert(input);
    return newAccount[0];
};
exports.createAccount = createAccount;
const deleteAccount = async (email) => {
    const account = await knex("account").where("email", email).del();
    return account[0];
};
exports.deleteAccount = deleteAccount;
