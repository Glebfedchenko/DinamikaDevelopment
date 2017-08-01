var express = require('express');

var app = express();
app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{
    res.writeHead(301,{'Location':'home.html' });
    res.end();
})
app.listen('8000');