// Задача 2

// Модифицируйте код предыдущей задачи. Добавьте код, который отправляет GET запрос по пути '/test'.

const http = require ('http');
const url = require ('url');
const port = 1337;


const server = http.createServer( (req, res) => {

    console.log(`Method is :${req.method}. Path is ${req.url}`)

    if (req.method === "GET" && req.url === "/test") {
        let response = 'Hello from test';
        res.end (response);

    } else {
        res.write ('YOOO');
        res.end ();
    }

});

server.listen ((port)=>{
    console.log(`Running at: ${port}`)
});