/*1st way*/
var a = require('./test/test');
a();
/*2nd way*/
var a = require('./test');
a();
/*3rd way*/
var a =require.resolve('/lesson_27/ClassWork/task_3/test/test.js');
a();