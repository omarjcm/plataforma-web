// Encargada de recibir las peticiones HTTP y pasarla al controlador.
const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(((error) => {
            response.error(req, res, 'Unexpected error.', 500, error)
        }))
})

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch((error) => {
            response.error(req, res, 'Información inválida.', 400, 'Error en el controlador.')
        })
})

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, 'Error interno.', 500, error)
        })
})

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

module.exports = router