
const socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
})
socket.on('disconnect', function () {
    console.log('Disconnected from server');
})
socket.on('greet', function (x) {
    console.log(x);
    document.write(x.text);
    // const p = jQuery('<p></p>');
    // p.text(`${x}`);

    // jQuery('#msg').append(p);
    socket.emit('receive_message', {
        from: 'FG',
        text: 'Its live'
    })
});
