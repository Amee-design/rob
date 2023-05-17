const mysql = require('mysql');
const { root } = require('postcss');

const db = mysql.createPool({
    connectionlimit: 10,
    host: 'locathost',
    user: 'root',
    password: 'MysqlPassword',
    database: 'register'

})

module.exports = db;