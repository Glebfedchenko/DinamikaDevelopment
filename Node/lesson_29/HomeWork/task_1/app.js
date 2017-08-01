const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 1337;
let currentNumber = 0;

var server = http.createServer(function (req,res) {

        const curPath = path.join('./' + currentNumber + ".txt");
        const writeStream = fs.WriteStream(curPath);
        writeStream.end(JSON.stringify(req.headers));
        res.end();
        currentNumber++;

});

server.listen(port);