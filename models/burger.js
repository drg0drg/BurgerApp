
// Require orm
const orm = require('../config/orm.js');


// Creating burger model by using the methods in ORM
const burger = {

  selectAll: callback => {
    orm.selectAll( res => {
      callback(res);
    });
  },

  insertOne: (burger_name, callback) => {
    orm.insertOne(burger_name, res => {
      callback(res);
    });
  },

  updateOne: (burger_id, callback) => {
    orm.updateOne(burger_id, res => {
      callback(res);
    });
  }

};


// Export burger
module.exports = burger;