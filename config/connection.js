// Node Dependency
const mysql = require("mysql");
let connection;

// For Heroku use JAWSDB_URL
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "itapcyyakwbluus6",
    port: process.env.PORT || 3306,
    password: "j6gfli217valggx1",
    database: "q42flo3363an401m",
  });
}

// Export the Connection
module.exports = connection;
