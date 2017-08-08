module.exports = function (app, pool) {

    app.get ('/', function (req, res) {
        res.render ('login');
    });


};
