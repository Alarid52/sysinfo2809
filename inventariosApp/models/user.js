const login = (email,passwd,callback)=>{
    var err;
    var bd_data; //simula la info de bd

    if ( email == 'joe@doe.com' && passwd == '1234') {
        //consulta bd info faltante
        bd_data={
            'email': email,
            'depto': 'Ventas',
            'phone': '5511447788'
        }
    } else {
        err = {
            'mensaje': "Credenciales incorrectas"
        }
    }
    callback(err,bd_data);
}

exports.login = login;