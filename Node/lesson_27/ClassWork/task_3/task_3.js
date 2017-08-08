const test1 = require('./test'); //a file to require is specified in root directory
const test2 = require('./test1/test1'); //a file to require is directly specified 
const test3 = require('./test2'); //looks for a file within given directory

test1();
test2();
test3();