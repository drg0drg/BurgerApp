// Node Dependency
const mysql = require("mysql");
let connection;

// For Heroku use JAWSDB_URL
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "burgers_db",
  });
}

// Export the Connection
module.exports = connection;
