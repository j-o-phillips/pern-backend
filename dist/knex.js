const knex = require("knex");
const knexfile = require("./knexfile.js");
const db = knex(knexfile.development);
db.raw("SELECT current_database()")
    .then((res) => console.log("Connected to:", res.rows[0].current_database))
    .catch((err) => console.error("Error:", err));
module.exports = db;
