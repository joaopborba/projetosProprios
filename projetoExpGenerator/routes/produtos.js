const express = require("express");
const router = express.Router();

const produtoController = require('../controllers/produtoController');

router.get('/criar', produtoController.viewForm);
router.post('/criar', produtoController.salvarForm);
router.get('/sucesso', produtoController.sucesso);
router.get('/:id/editar', produtoController.viewAttForm);
router.put('/editar', produtoController.editar);
router.get('/', produtoController.listarProdutos);
router.delete('/deletar/:id', produtoController.deletarProduto);


module.exports = router;