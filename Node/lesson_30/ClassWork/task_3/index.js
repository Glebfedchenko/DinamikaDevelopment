const express = require('express');
const url = require('url');
const path =require('path');

const app = express();

app.use((req,res)=>{
    res.send();
})
app.get('/',(req, res)=>{
    res.send(`<h1>Hello Express</h1>`)
});

app.get('/test', (req,res)=>{
    res.sendfile(__dirname+'/public/form.html');
    console.log('go test');
})
app.post('/test', (req,res)=>{
    req.on('data',(x)=>{
        console.log('Body: ', x.toString());
    })
    req.pipe(res);
})

app.listen(8000);