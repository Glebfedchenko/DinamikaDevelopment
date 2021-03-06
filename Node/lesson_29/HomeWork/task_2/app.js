// Задание: Добавьте в предыдущую задачу код, отправляющий POST запрос по пути '/test'. Тело запроса - произвольный текст. Ответ сервера должен быть в формате JSON в следующем виде: '{"message": "ТЕКСТ ТЕЛА ЗАПРОСА"}'.
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 1337;
let currentNumber = 0;

var server = http.createServer(function (req, res) {

        if (req.method === 'POST' && req.url === '/test') {
                req.pipe(res);
        } else {
                const curPath = path.join('./' + currentNumber + ".txt");
                const writeStream = fs.WriteStream(curPath);
                writeStream.end(JSON.stringify(req.headers));
                res.end();
                currentNumber++;
        }

        const data = '{"message": "YOOO"}';
        const recdata = '';
        const options = {
                port: 1337,
                method: 'POST',
                path: '/test'
        }
        const p = http.request(options, (res)=>{        
                res.on('data', (x)=>{
                        recdata +=x;
                })
                res.on('end',()=>{
                        const parsed = JSON.parse(recdata);
                        console.log('Response: ',recdata.message)
                })
        })
});

server.listen(port);