var mysql = require('mysql');

var connectionPool = mysql.createPool({
    host: 'localhost',
    database: 'gb_node',
    user: 'root',
    pass: '',
});

module.exports = connectionPool;