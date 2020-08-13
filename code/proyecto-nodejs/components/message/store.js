const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb+srv://ups:clave@XXXXX.mongodb.net/ups?retryWrites=true&w=majority'

db.Promise = global.Promise
db.connect(uri, { 
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    dbName: 'ups'
 })
    .then(() => console.log('[db] Conectada con éxito.'))
    .catch(error => console.error('[db] ', error))

function addMessage( message ) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages( filterUser ) {
    let filter = {}
    if (filterUser != null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find( filter )
    return messages
}

async function updateMessage(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
} 

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: removeMessage,
    //get
    //delete
}
