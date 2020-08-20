const use = require("./network")
const store = require('./store')

function addChat( users ) {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            return reject('Invalid user list')
        }
        const fullChat = {
            users: users,
        }
        store.add(fullChat)
        return resolve( fullChat )
    })
}

function getChats( userId ) {
    return store.get( userId )
}

module.exports = {
    addChat,
    getChats
}