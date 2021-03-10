var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Proceso de autenticación pero sin elementos de SEGURIDAD
router.post('/login', (req,res,next) => {
  //console.log(req.body.email , req.body.passwd);
  usuario.login(req.body.email,req.body.passwd,( e, d )=>{ //passwd SHA256 (algoritmo HASH de resumen)
    if (d) {
      res.send('Login correcto');
      ses = req.session;
      console.log(ses.id);


    } else {
      res.json(e);
    }
  });
});

module.exports = router;
