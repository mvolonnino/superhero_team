const mysql = require("mysql");
require("dotenv").config();
var connection;

// connect to database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: process.env.MYSQL_KEY,
    database: "hero_db",
  });
}

// clg that we are connected to database
connection.connect(function (err) {
  if (err) throw err;
  console.log("🔥connected🔥");
});

module.exports = connection;
