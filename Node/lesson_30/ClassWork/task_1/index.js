const express = require('express');

const app = express();

app.all('/',(req, res)=>{
    res.send(`<h1>Hello Express</h1>`)
});

app.listen(8000);