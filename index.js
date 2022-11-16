// Cargar las Dependencias
var bodyParser = require("body-parser");
var express = require("express");
// Cargamos la configuracion
let appConfig = require("./config/config.js");
// Inicializar la app web y la DB
let app = express();
let DB = require("./db/DB");
// Registramos los middlewares
app.use(bodyParser.json());
// Cargamos los routers
let userRouter = require("./routes/usuarios");
// Registramos los routers
app.use("/usuarios", userRouter);
// levantamos el servidor
app.listen(appConfig.PORT, function () {
    console.log(
        "El servidor ha sido levantado en el puerto: " + appConfig.PORT
    );
});
