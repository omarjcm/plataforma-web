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

console.log('Inicializando proceso.')

hola('Guillermo', function(nombre) {
    hablar(function() {
        hablar(function() {
            hablar(function() {
                hablar(function() {
                    adios(nombre, function() {
                        console.log( 'Finalizando proceso.' )
                    })
                })
            })
        })
    })
})
