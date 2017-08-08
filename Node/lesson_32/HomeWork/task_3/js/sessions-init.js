
const session = require('express-session');
const mySQL = require('express-mysql-session')(session);

const mySessionStore = new mySQL({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'12345',
    database:'db',
    checkExpiratinInterval: 900000, 
    expiration: 60000 
});


module.exports = function (app) {
    app.use(session({
        secret:'12345',
        store:mySessionStore,
        saveUninitialized:true,
        resave:true,
    }));
};


