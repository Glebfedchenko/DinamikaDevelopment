const express = require('express');
const mysql = require('mysql');

const app = express();
const pool = mysql.createPool({
    connectionLimit: 1,
    queueLimit: 5,
    acquireTimeout: 5000,
    host: 'localhost',
    user: 'fg',
    password: '12345',
    database: 'test'
});

app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log('Connection set');

        connection.query('SELECT * from test_table', (err, rows) => {
            if (err) console.log(err);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<table>');
            res.write(`
            <thead>
                <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>INFO</td>
                </tr>
            </thead>
            `);
            for (var i = 0; i < rows.length; i++) {
                res.write(`
                
				<tr>
					<td>${rows[i].id}</td>
                    <td>${rows[i].name}</td>
                    <td>${rows[i].info}</td>
				</tr>
			`)
            }

            pool.end((err) => {
                console.log('pool closed')
            })
        })
    })
})

app.listen(8000);