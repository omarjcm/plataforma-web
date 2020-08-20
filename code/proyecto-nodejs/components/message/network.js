const express = require('express')
const multer = require('multer')

const config = require('../../config')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/' + config.filesRoute + '/')
    },
    filename: function(req, file, cb) {
        const [name, extension] = file.originalname.split('.')
        cb(null, `${name}-${Date.now()}.${extension}`)
    }
})

const upload = multer({ storage: storage })

router.get('/', function(req, res) {
    const filterMessages = req.query.chat || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(((error) => {
            response.error(req, res, 'Unexpected error.', 500, error)
        }))
})

router.post('/', upload.single('file'), function(req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((data) => {
            response.success(req, res, data, 201)
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