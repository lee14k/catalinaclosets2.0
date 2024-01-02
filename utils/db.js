// utils/db.js
const mysql = require('mysql2/promise');
const { mysqlConfig } = require('../config').default;

async function query(sql, params) {
  const connection = await mysql.createConnection(mysqlConfig);
  const [results, ] = await connection.execute(sql, params);
  await connection.end();
  return results;
}

module.exports = { query };
