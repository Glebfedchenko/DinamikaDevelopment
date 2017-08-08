// Задача 3

// Добавьте в код предыдущей задачи обработку GET запроса по пути '/test'. Ответом сервера на такой запрос должен быть JSON-объект '{"message": "Hello World!"}'.
const http = require ('http');
const url = require ('url');
const port = 1337;

const server = http.createServer( (req, res) => {

    console.log(`Method is :${req.method}. Path is ${req.url}`)

    if (req.method === "GET" && req.url === "/test") {
        let response = '{"message": "Hello World!"}';
        res.end (response);

    } else {
        res.write ('YOOO');
        res.end ();
    }

});

server.listen ((port)=>{
    console.log(`Running at ${port}`);
});