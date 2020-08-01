function hola(nombre, cb) {
    setTimeout(function() {
        console.log( `Hola, soy ${nombre}` )
        cb()
    }, 1000)
}

function adios(nombre, otroCb) {
    setTimeout(function() {
        console.log( `Adiós ${nombre}` )
        otroCb()
    }, 500)
}

function soyAsincrona( miCallback ) {
    console.log( 'Hola, soy una función asíncrona.' )
    setTimeout( function() {
        miCallback()
    }, 1000 )
}

// hola('Guillermo', () => {})
// adios( 'Guillermo', () => {} )

// let nombre = 'Guillermo'
// hola(nombre, function() {
//     adios(nombre, function() {
//         console.log( 'Terminando proceso.' )
//     })
// })

soyAsincrona( function() {
    console.log()
} )