const EventEmmiter = require('events');

const emiter = new EventEmmiter();
let counter = Date.now();


emiter.on('tick', function () {
    let currentTime = Date.now();
    let secondsPassed = Math.round(((currentTime - counter)/1000)*1000)/1000;
 console.log('First tick was generated ' + secondsPassed + ' seconds ago');
});

setInterval(()=>{emiter.emit('tick')},1000);