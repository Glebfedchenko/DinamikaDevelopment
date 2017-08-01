const express = require('express');

const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fg',
    password:'12345',
    database:'test'
});

app.use(function(req, res) {
	connection.connect(function(err) { 
		if (err) console.log(err.stack); 
		console.log('connected as id ' + connection.threadId);
	}); 

	connection.query('SELECT * FROM test_table', function(err, rows, fields) {
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write('<table>'); 

		for (var i = 0; i < rows.length; i++) {
			res.write(`
				<tr>
					<td>${rows[i].id}</td>
                    <td>${rows[i].name}</td>
                    <td>${rows[i].info}</td>
				</tr>
			`)
		}; 

		res.write('</table>'); 
		res.end(); 
	})
}); 

// app.get('/',(req,res,next)=>{
//     res.send(`Hello`);
// })

// connection.connect();
// connection.query('SELECT * FROM test_table',(err,rows,fields)=>{
//     if(err) console.log(err);
//     console.log(rows);
// })

app.listen(8000);

