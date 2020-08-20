const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', function(req, res) {
    controller.addUser(req.body.user, req.body.name, req.body.lastName)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((error) => {
            response.error(req, res, 'Información inválida.', 400, error)
        })
})

module.exports = router