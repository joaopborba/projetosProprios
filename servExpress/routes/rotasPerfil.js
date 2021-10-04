const express = require("express");
const perfilController = require("../controllers/perfilController");
const router = express.Router();

router.get("/criar", perfilController.criarPerfil);

module.exports = router;
