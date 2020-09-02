const mysql = require("mysql");

// connect to database
var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: process.env.MYSQL_KEY,
  database: "hero_db",
});

// clg that we are connected to database
connection.connect(function (err) {
  if (err) throw err;
  console.log("🔥connected🔥");
});

module.exports = connection;
