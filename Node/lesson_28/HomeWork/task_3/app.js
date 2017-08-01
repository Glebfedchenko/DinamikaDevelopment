var fs = require('fs');
var arr = new Uint16Array(1024);
var buf = Buffer.from(arr.buffer);
var bufdata = buf.toString('utf-8',10,20);

fs.open('test.txt', 'w+', (er,fd) => {
    fs.read(fd,0, buf.length, 0, (er,bufdata)=>{
        fs.writeFile('output.txt',bufdata, (err) =>{
            if(err){
                console.log('Wrong...')
            }
        })
    })
})