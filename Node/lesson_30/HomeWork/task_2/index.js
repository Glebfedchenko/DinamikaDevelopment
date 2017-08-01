var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Main Page</h1>');
})

app.get('/users', (req, res) => {
    res.send({
        users: [
            { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
            { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, { name: 'Jack', age: 26 }
        ]
    })
})

app.listen(8000);