const express = require("express");
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/criar', produtoController.viewForm);
router.post('/criar', produtoController.salvarForm);
router.get('/sucesso', produtoController.sucesso);


module.exports = router;