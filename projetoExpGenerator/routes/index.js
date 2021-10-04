var express = require('express');
const contatoController = require('../controllers/contatoController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", contatoController.index);

module.exports = router;
