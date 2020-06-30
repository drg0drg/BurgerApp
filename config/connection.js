// Node Dependency
const mysql = require("mysql");
require('dotenv').config();
let connection;

const username = process.env.USER;
const password = process.env.PASSWORD;


// For Heroku use JAWSDB_URL
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: username,
    port: process.env.PORT || 3306,
    password: password,
    database: "burgers_db",
  });
}

// Export the Connection
module.exports = connection;
