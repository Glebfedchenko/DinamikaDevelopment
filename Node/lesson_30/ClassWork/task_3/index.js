const express = require('express');
const url = require('url');

const app = express();

app.get('/',(req, res)=>{
    res.send(`<h1>Hello Express</h1>`)
});

app.use('/test',express.static('./test.html'));
app.route('/test')
    .get((req,res)=>{
        const data = url.parse(req.url,true).query;
        res.end(data.text);
    })

    .post((req,res)=>{
        const data = req.body.text;
    })

app.listen(8000);