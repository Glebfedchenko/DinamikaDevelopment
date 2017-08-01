const http = require('http');
const url = require('url')
const port = process.env.port || 1337;


const server = http.createServer((req,res)=>{
    console.log(`Method is :${req.method}. Path is ${req.url}`)
    res.write('YOO!!!!');
    res.end();
})

console.log(`Running port ${port}`); 
server.listen(port);