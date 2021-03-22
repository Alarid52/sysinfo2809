var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("frmLogin", {});
});

//Proceso de autenticación pero sin elementos de SEGURIDAD
router.post('/login', (req, res, next) => {
  usuario.login(req.body.email, req.body.passwd, (e, d) => { //passwd SHA256 (algoritmo HASH de resumen)
    if (d) {
      ses = req.session;
      //console.log(ses.id);
      ses.userdata = d;
      //console.log(ses);
      //payload*************************************************
      const payload = {
        datos: d
      };
      const clave = process.env.SECRETO || 'dios1234'; // Obtener desde ENV
      console.log(clave);
      const token = jwt.sign(payload, clave, { expiresIn: 60 * 5 });
      ses.token = token;
      /*jwt.verify(token, clave, function(err, decoded) {
        console.log(decoded)
      });*/
      //********************************************************
      res.redirect('/');
    } else {
      res.json(e);
    }
  });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((falla) => {
    if (falla) {
      res.send(501, "Error")
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
