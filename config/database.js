const mysql = require("mysql");
const util = require("util");
const { formatConsoleError } = require("../lib/utils");

const dbConn = mysql.createPool({
  connectionLimit: 200,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbConn.getConnection((err, connection) => {
  if (err) {
    switch (err) {
      case "PROTOCOL_CONNECTION_LOST":
        formatConsoleError(err, "Database connection was closed.");
        break;
      case "ER_CON_COUNT_ERROR":
        formatConsoleError(err, "Database has too many connections.");
        break;
      case "ECONNREFUSED":
        formatConsoleError(err, "Database connection was refused.");
        break;
      default:
        return;
    }
  }

  if (connection) connection.release();

  return;
});

// native module which acts as a async wrapper around every query
// similar to using a async await
// dbConn.query = util.promisify(dbConn.query)

module.exports = dbConn;
