const express = require("express");
const contatoController = require("../controllers/contatoController");
const router = express.Router();

router.get("/cadastrar", contatoController.cadastrarContato);

module.exports = router;
