const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send(console.log(req.url));
    res.send(console.log(req.method));

})
app.listen(8000);