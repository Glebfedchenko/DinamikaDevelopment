const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fg',
    password:'12345',
    database:'test'
});

connection.connect();
connection.query('SELECT 1+1 AS solution',(err,rows,fields)=>{
    if(err) throw err;
    console.log(rows[0].solution)
})

app.listen(8000);