var jwt = require('jsonwebtoken');

var payload = {
    userdata : {'email':'joe@doe.cop','phone':'5544332211'}
}

const clave = "dios1234"; //hacer clave fuerte

const token = jwt.sign(payload,clave,{expiresIn:60*5});

console.log(token);

//tarea

//validar token