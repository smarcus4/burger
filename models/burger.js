// require in the orm file that will talk to the database
var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
  // selectAll for getting all the burgers
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  // insertOne for adding a new burger
  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  // updateOne for changing the burger status
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// export burger back to the controller
module.exports = burger;