// Encargada de recibir las peticiones HTTP y pasarla al controlador.
const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch((error => {
            response.error(req, res, 'Unexpected error.', 500, error)
        }))
})

router.post('/', function(req, res) {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(error => {
            response.error(req, res, 'Información inválida.', 400, 'Error en el controlador.')
        })
})

module.exports = router