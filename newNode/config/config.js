const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "myroot",
  password: "root",
  database: "mydb",
});

module.exports = client;