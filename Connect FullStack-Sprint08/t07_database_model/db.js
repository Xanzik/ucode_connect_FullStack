const mysql = require('mysql2');
const config = require('./config.json');

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Fehler: Verbindung unterbrochen.', err);
    return;
  }

  console.log('Es funktioniert.');

  connection.release();
});

module.exports = pool;