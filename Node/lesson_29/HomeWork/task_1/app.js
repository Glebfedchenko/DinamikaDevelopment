// Задание: Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл, имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
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