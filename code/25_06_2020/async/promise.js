function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( `Hola, soy ${nombre}.` )
            resolve(nombre)
        }, 1000) 
    })
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log( `Adiós, ${nombre}.` )
            resolve(nombre)
        }, 500)    
    } )

}

function hablar( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( 'Bla bla bla bla bla' )
            resolve(nombre)
        }, 500)    
    })
}

console.log( 'Inicializar Proceso' )
hola('Guillermo')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .then( (nombre) => {console.log('Terminando el proceso.')} )
    .catch( error => {
        console.error( error )
        console.error( 'Existe un error' )
    } )
