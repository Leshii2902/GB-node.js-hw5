var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    database: 'gb_node',
    user: 'root',
    password: '402834417',
});

module.exports = pool;