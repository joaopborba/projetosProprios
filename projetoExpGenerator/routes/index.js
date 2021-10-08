var express = require('express');
const contatoController = require('../controllers/contatoController');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", contatoController.index);
router.get("/contatos", indexController.viewContatos);
router.get("/confirmarcontato", indexController.confirmarContato);

module.exports = router;
