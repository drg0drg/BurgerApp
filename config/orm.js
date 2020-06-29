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
  //selectAll method of ORM selects all info in db 
  //will be used when user hits "/" or "/index" (routes defined in <burgers_controller.js>)
  selectAll: (callback) => {
    connection.query("SELECT * FROM burgers", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  //insertOne method of ORM inserts new burger entity in db 
  //will be used when user hits "/burger/create" in a <post> method (routes defined in <burgers_controller.js>)
  insertOne: (burger_name, callback) => {
    connection.query(
      //sql query
      "INSERT INTO burgers SET ?",
      {
        burger_name: burger_name,
        devoured: false,
      },
       (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
  //updateOne method of ORM inserts new burger entity in db 
  //will be used when user hits "/burger/create" in a <post> method (routes defined in <burgers_controller.js>)
  updateOne: (burgerID, callback) => {
    connection.query(
      //sql query
      "UPDATE burgers SET ? WHERE ?",
      //passing in both objects for SET and WHERE condition
      [{ devoured: true }, { id: burgerID }],
       (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

// Export the ORM
module.exports = orm;
