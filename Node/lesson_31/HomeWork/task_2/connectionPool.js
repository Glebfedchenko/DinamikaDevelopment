const mysql = require('mysql');

const connOptions = {
    host:'localhost',
    port:'3306',
    database:'test',
    user:'fg',
    password:'123455'

};

const pool = mysql.createPool(connOptions);

module.exports = {
    pool:pool
};

