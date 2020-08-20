const store = require('./store')

function addUser(user, name, lastName) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.error('[UserController] No hay nombre.')
            return reject('Los datos son incorrectos')
        }
        const fullUser = {
            user: user,
            name: name,
            lastName: lastName,
        }
        store.add( fullUser )
        return resolve( fullUser )
    }) 
}

module.exports = {
    addUser,
}