// Módulos
let express = require('express');
let app = express();

let mongo = require('mongodb');
let swig = require('swig');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Variables
app.use(express.static('public'));

app.set('port', 8081);
app.set('db','mongodb://admin:sdi@tiendamusica-shard-00-00-uyeim.mongodb.net:27017,tiendamusica-shard-00-01-uyeim.mongodb.net:27017,tiendamusica-shard-00-02-uyeim.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true&w=majority');

//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig);
require("./routes/rcanciones.js")(app, swig, mongo);
require("./routes/rautores.js")(app, swig);

// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
})
