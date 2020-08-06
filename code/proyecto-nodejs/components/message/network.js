// Encargada de recibir las peticiones HTTP y pasarla al controlador.
const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/message', function(req, res) {
    console.log( req.headers )
    res.header({
        "custom-header":"Nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de mensajes.')
})

router.post('/message', function(req, res) {
    console.log( req.query )
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado.', 500, 'Es solo una simulacion de los errores.')
    } else {
        response.success(req, res, 'Creado correctamente.', 201)
    }
})

module.exports = router