const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'booking'
});

connection.connect();

module.exports = connection;
