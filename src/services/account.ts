const knex = require("../knex");

export const fetchAllAccounts = async () => {
  return knex("account").returning("*");
};

export const fetchByEmail = async (email) => {
  return knex("account").where("email", email).first().returning("*");
};

export const createAccount = async (account) => {
  const input = {
    ...account,
    role: "admin",
  };
  const newAccount = await knex("account").returning("*").insert(input);
  return newAccount[0];
};

export const deleteAccount = async (email) => {
  const account = await knex("account").where("email", email).del();
  return account[0];
};
