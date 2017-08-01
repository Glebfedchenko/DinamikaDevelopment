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

server.listen (port);