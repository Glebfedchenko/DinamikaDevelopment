const fs = require('fs');

const first = fs.FileReadStream('./test.txt',{start:10, end:20});
const second = fs.FileWriteStream('./output.txt');

first.pipe(second).on('close',function () {
    console.log( 'Logged from 10 to 20 byte');
});