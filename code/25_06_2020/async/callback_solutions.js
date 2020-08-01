function hola(nombre, cb) {
    setTimeout(function() {
        console.log( `Hola, soy ${nombre}.` )
        cb(nombre)
    }, 1000)
}

function adios(nombre, otroCb) {
    setTimeout(function() {
        console.log( `Adiós, ${nombre}.` )
        otroCb()
    }, 500)
}

function hablar( cb ) {
    setTimeout(function() {
        console.log( 'Bla bla bla bla bla' )
        cb()
    }, 500)
}

function conversacion(nombre, num_veces, cb) {
    if (num_veces > 0) {
        hablar( () => conversacion( nombre, --num_veces, cb ) )
    } else {
        adios( nombre, cb )
    }

}

console.log('Inicializando conversación.')
hola('Guillermo', function(nombre) {
    conversacion(nombre, 4, function() {
        console.log('Finalizando conversación.')
    })
})