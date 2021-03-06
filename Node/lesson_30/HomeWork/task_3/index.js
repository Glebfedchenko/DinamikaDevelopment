const express = require ('express');
const app = express ();
const port = process.env.port || 8000;

var users = [
    {name: 'Jane', age: 23}, {name: 'John', age: 30}, {name: 'Vasya', age: 25},
    {name: 'Yvonne', age: 34}, {name: 'Will', age: 18}, {name: 'Jack', age: 26}
];

app.use ("/public", express.static (__dirname + "/public"));

app.all('/', function (req,res) {

    res.redirect('/users');
});

app.get ('/users', function (req, res) {
    res.sendFile (__dirname + '/public/users.html');
    console.log ('GET on /users');

});

app.get ('/users/:id', function (req, res) {

    res.send (JSON.stringify (users[req.params.id]));
});

app.get ('/usersArray', function (req, res) {
    res.send (JSON.stringify (users))
});

app.use(function (req,res,next) {
    res.sendFile (__dirname + '/public/error.html');

    next(new Error('Page not found'));
});


app.use (function (err, req, res, next) {

    if (err) {
        console.log('Error occured : ', err.message );
    }

});


app.listen (port);