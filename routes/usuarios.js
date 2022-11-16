//cargar dependencias
let router = require("express").Router();
let dbUsuarios = require("../db/dbUsuarios");

//GET
router.get("/", function (req, res) {
    res.send("Home of Usuarios");
});

//GET ALL users
router.get("/all", async function (req, res) {
    let result = await dbUsuarios.getAllUsuarios();
    res.json(result);
});

//POST create user
router.post("/create", async function (req, res) {
    let usuario = req.body;
    let result = await dbUsuarios.createUsuario(usuario);
    res.json(result);
});

//DELETE user
router.delete("/delete/:idUsu", async function (req, res) {
    let idUsuario = req.params.idUsu;
    let result = await dbUsuarios.deleteUsuario(idUsuario);
    res.json(result);
});

module.exports = router;
