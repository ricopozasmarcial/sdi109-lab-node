module.exports = function(app) {
    app.get("/usuarios", function(req, res) {
        res.send("ver usuarios");
    });
};

module.exports = function(app, swig,  gestorBD) {
    app.get("/usuarios", function(req, res) {
        res.send("ver usuarios");
    });
};