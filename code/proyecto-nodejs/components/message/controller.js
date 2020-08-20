const use = require("./network")
const store = require('./store')
const config = require('../../config')

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[MessageController] No hay chat, usuario o mensaje.')
            return reject('Los datos son incorrectos')
        }
        let fileUrl = ''
        if (file) {
            fileUrl = config.host + ':' + config.port + config.publicRoute + config.filesRoute + '/' + file.filename
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        }
        store.add( fullMessage )
        return resolve( fullMessage )
    })
}

function getMessages( filterChat ) {
    return new Promise((resolve, reject) => {
        resolve(store.list( filterChat ))
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