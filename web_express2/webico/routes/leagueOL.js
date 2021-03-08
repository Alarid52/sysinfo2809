var express = require('express');
var router = express.Router();

//Rutas y métodos

router.get('/', (req,res,next) => {
    res.send('Bienvenido invocador')
});

router.get('/garen', (req,res,next) => {
    res.render('campeongaren', {
        nombre: 'Garen' ,
        apodo: 'El poder de demacia',
        pasiva: 'Perseverancia',
        habilidadq : 'Golpe decisivo',
        habilidadw: 'Coraje',
        habilidade: 'Juicio',
        habilidadr: 'Jusiticia demaciana',
    })
});

router.get('/yone', (req,res,next) => {
    res.render('campeonyone', {
        nombre: 'Yone' ,
        apodo: 'El imborrable',
        pasiva: 'Camino del cazador',
        habilidadq : 'Acero letal',
        habilidadw: 'Cercenamiento espiritual',
        habilidade: 'Alma desatada',
        habilidadr: 'Destino sellado',
    })
});

module.exports = router;