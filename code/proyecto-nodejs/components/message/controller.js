const use = require("./network")
const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[MessageController] No hay usuario o mensaje.')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        store.add( fullMessage )
        return resolve( fullMessage )
    })
}

function getMessages( filterUser ) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Data inválida')
            return false
        }
        const result = await store.update(id, message)
        resolve( result )
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido')
            return false
        }

        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}