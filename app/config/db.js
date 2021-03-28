var mysqlModel = require('mysql-model');
require('dotenv').config();

const MyAppModel =mysqlModel.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

// conn.connect();
module.exports = MyAppModel;