module.exports = function(app, swig) {

    app.get("/autores", function(req, res) {
        var autores = [ {
            "nombre" : "sandra",
            "grupo"  : "Artic Monkeys",
            "rol"    : "cantante"
        }, {
            "nombre" : "raquel",
            "grupo"  : "UniRap",
            "rol"    : "cantante"
        }, {
            "nombre" : "marcial",
            "grupo"  : "NullPointerToMyHeart",
            "rol"    : "cantante"

        } ];
        var respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Lista de Autores',
            autores : autores
        });
        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    })

    app.post("/autor", function(req, res) {
        let nombre = req.body.nombre;
        let grupo = req.body.grupo;
        if(req.body.nombre == "" || req.body.nombre == null )
            nombre = "Nombre no enviado en la petición";
        if(req.body.grupo == "" || req.body.grupo == null)
            grupo = "Grupo no enviado en la petición";

        res.send("Autor agregado:"+nombre +"<br>"
            +" Grupo :" +grupo +"<br>"
            +" Rol: "+req.body.rol);
    });

    app.get('/autores*', function (req, res) {
        res.redirect("/autores");
    })
};