const MyAppModel = require('../config/db');

let todo = new MyAppModel({tableName: "todos"});

module.exports = todo;