//Cargamos la base de datos
let dbConnector = require("./DB");
let appConfig = require("../config/config");
let { DeleteResult, ObjectId } = require("mongodb");
//configuracion de usuarios en BD
let collectionName = "usuarios";
//implementamos las funciones del CRUD
//Crear USUARIOS
async function createUsuario(usuario) {
    try {
        let db = dbConnector.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = await collection.insertOne(usuario);
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}

//GET ALL USUARIOS
async function getAllUsuarios() {
    try {
        let db = dbConnector.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let cursor = collection.find({});
        let result = [];
        let currentUsuario = await cursor.next();
        while (currentUsuario) {
            result.push(currentUsuario);
            currentUsuario = await cursor.next();
        }
        return result;
    } catch (ex) {
        console.log(ex);
        return [];
    }
}

//GET ALL USUARIOS
async function deleteUsuario(id) {
    try {
        // { "_id" : ObjectId("6373ae1b29b8d851033129a1") }
        let filter = {
            _id: ObjectId(id),
        };
        let db = dbConnector.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = await collection.deleteOne(filter);
        return result;
    } catch (ex) {
        console.log(ex);
        return;
    }
}

module.exports = {
    collectionName,
    createUsuario,
    getAllUsuarios,
    deleteUsuario,
};
