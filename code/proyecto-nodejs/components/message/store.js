const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb+srv://ups:ups2020@cluster0.pjyad.gcp.mongodb.net/ups?retryWrites=true&w=majority'

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

async function getMessages() {
    const messages = await Model.find()
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
} 

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //delete
}