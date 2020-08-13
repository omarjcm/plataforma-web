const store = require('./store')

function addUser(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.error('[UserController] No hay nombre.')
            return reject('Los datos son incorrectos')
        }
        const user = {
            name: name,
        }
        store.add( user )
        return resolve( user )
    }) 
}

module.exports = {
    addUser,
}