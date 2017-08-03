var express = require('express');
var http = require('http'); 
var app = express();

var port = process.env.port || 8000; 

var cookieParser = require('cookie-parser');

app.use(cookieParser())

app.all('/', function (req, res) {
    res.cookie('cookie1', 'Hello', {
        expires: new Date(Date.now() + 7),
        httpOnly: true,
        signed:true
    })

    console.log('Cookies: ', req.cookies)

    res.end(req.cookies.cookie1);
})

    app.listen(port, function () {
        console.log('app running on port ' + port);
 })