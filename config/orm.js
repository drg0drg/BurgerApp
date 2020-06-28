// Import  the connection
const connection = require("./connection.js");

// Connect MySQL database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//building the ORM
const orm = {
  selectAll: (callback) => {
    connection.query("SELECT * FROM burgers", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: (burger_name, callback) => {
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: burger_name,
        devoured: false,
      },
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },

  updateOne: (burgerID, callback) => {
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [{ devoured: true }, { id: burgerID }],
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

// Export the ORM
module.exports = orm;