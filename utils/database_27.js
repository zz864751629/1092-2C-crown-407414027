const mysql = require('mysql2');

/* 连接资料库*/
const pool = mysql.createPool({
    host:'localhost', 
    user: 'root', 
    password: '0000',
    database: 'crown_27'
  });

module.exports = pool.promise();