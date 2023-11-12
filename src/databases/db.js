var mysql = require('mysql2');
var db = mysql.createConnection({
    host: '3.35.250.123',
    user: 'LSH',
    password: '1c3be9dfff44b1d2addb8a6557887613',
    database: ''
});
db.connect();

module.exports = db;