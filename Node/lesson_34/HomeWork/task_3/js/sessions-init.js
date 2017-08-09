const session = require('express-session');
const mySQL = require('express-mysql-session')(session);

const mySessionStore = new mySQL({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'newschema',
    checkExpirationInterval: 30000,
    expiration: 60000 
});


module.exports = function (app) {
    app.use(session({
        secret:'mySecretKey12345',
        store:mySessionStore,
        saveUninitialized:true,
        resave:true
    }));
};
