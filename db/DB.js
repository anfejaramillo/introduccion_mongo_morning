// Cargar las Dependencias
const { MongoClient } = require("mongodb");
// Cargamos la configuracion
let appConfig = require("../config/config.js");
//inicializar la conexion a DB
let mongoClient = new MongoClient(appConfig.dbUrl);
mongoClient
    .connect()
    .then(function (clientConnected) {
        mongoClient = clientConnected;
        console.log("Mongo DB connected successfully");
    })
    .catch(function (err) {
        mongoClient = null;
        console.log(err);
    });

module.exports = mongoClient;
