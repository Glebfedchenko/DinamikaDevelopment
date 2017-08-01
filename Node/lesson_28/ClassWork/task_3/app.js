var fs = require('fs');
const a = 'Hello World';
a === process.argv[2];

fs.writeFile('test.txt',a,function(err){
    if(err){
        console.log('Something went wrong')
    }
})

