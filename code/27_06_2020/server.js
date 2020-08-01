const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
app.use(router)

router.get('/message', function(req, res) {
    res.send( 'Lista de mensajes.' )
})
router.post('/message', function(req, res) {
    console.log( req.body )
    console.log( req.query )
    res.status(201).send( { tipo_error:0, mensaje_error:'', mensaje_exito: 'Añadido exitosamente.' } )
})
router.delete('/message', function(req, res) {
    res.send( 'Mensaje eliminado.' )
})

// app.use('/', function(req, res) {
//     res.send('Hola mundo')
// })

app.listen(3000)
console.log( 'La aplicación está escuchando en http://localhost:3000 que es el puerto por el que escucho.' )