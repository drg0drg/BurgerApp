// Node Dependency
const mysql = require("mysql");
let connection;

// For Heroku use JAWSDB_URL
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b14bbf455c3347",
    port: process.env.PORT || 3306,
    password: "0f520a74",
    database: "burgers_db",
  });
}

// Export the Connection
module.exports = connection;
