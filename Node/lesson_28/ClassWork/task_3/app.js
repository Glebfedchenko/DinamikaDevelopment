var fs = require('fs');
const a = process.argv;

fs.writeFile('test.txt',a.join('GOGOGOG '),function(err){
    if(err){
        console.log('Something went wrong')
    }
})

