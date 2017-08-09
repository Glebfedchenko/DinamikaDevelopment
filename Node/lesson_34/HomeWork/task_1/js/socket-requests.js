module.exports = function (server) {
    const io = require('socket.io')(server);
    const msgNamespace = io.of('/message');


    msgNamespace.on('connection', function (socket) {
        socket.send({ text: 'Hello from namespace' });

        socket.on('receive_message', function (data) {
            console.log('Client response = ', data);
        });

        socket.on('connect_error', function (err) {
            console.log('connection error= ', err);
        })
    });
};