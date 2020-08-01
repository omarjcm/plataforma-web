async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( `Hola, soy ${nombre}.` )
            resolve(nombre)
        }, 1000) 
    })
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log( `Adiós, ${nombre}.` )
            resolve(nombre)
        }, 500)    
    } )

}

async function hablar( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log( 'Bla bla bla bla bla' )
            resolve(nombre)
        }, 500)    
    })
}

async function main() {
    let nombre = await hola('Guillermo')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('Terminando el proceso.')
}

console.log( 'Inicializando proceso.' )
main()
