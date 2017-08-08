// Задание: Добавьте в код предыдущих задач обработку ошибок: при запросе по несуществующему пути(все пути, кроме '/' и '/test'(с POST запросом)) на экран должно выводиться сообщение об ошибке, а статус-код ответа сервера должен быть 404.
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 1337;
let currentNumber = 0;

var server = http.createServer(function (req, res) {

        if (req.method === 'POST' && req.url === '/test') {
                req.pipe(res);
        } else if(req.url==='/'){
                const curPath = path.join('./' + currentNumber + ".txt");
                const writeStream = fs.WriteStream(curPath);
                writeStream.end(JSON.stringify(req.headers));
                res.end();
                currentNumber++;
        } else {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404,'NOT FOUND');
                res.write('Ooooops not found.....');
                res.end();
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