const Model = require('./model')

function addMessage( message ) {
    const myMessage = new Model( message )
    myMessage.save()
}

function getMessages( filterChat ) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterChat != null) {
            filter = { chat: filterChat }
        }
        Model.find( filter )
            .populate( 'user' )
            .populate( {
                path: 'chat',
                populate: {
                    path: 'users',
                }
            } )
            .exec((error, populated) => {
                if (error) {
                    return reject( error )
                }
                resolve( populated )
            })
    })
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
