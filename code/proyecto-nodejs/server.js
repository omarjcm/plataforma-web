const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const db = require('./db')
const router = require('./network/routes')
const config = require('./config')

db( config.dbUrl )

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
router(app)

app.use(config.publicRoute, express.static('public'))

app.listen( config.port )
console.log('La aplicación está escuchando en http://localhost:3000')