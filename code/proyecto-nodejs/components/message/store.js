const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb+srv://ups:clave@cluster0.pjyad.gcp.mongodb.net/ups?retryWrites=true&w=majority'

db.Promise = global.Promise
db.connect(uri, { 
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    dbName: 'ups'
 })
    .then(() => console.log('[db] Conectada con éxito.'))
    .catch(error => console.error('[db] ', error))

const list = []

function addMessage( message ) {
    const myMessage = new Model(message)
    myMessage.save()
//    list.push( message )
}

async function getMessages() {
    //return list
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}