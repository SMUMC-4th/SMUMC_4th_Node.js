const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '43.201.210.105',
    user: 'server_b',
    port: '3306',
    password: 'min91188540',
    database: 'mydb'
});

module.exports = {
    pool: pool
};