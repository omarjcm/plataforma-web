const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje( id, callback ) {
    const url = 'https://swapi.dev/api/people/:id/'.replace(':id', id)

    return new Promise((resolve, reject) => {
        $
        .get(url, {crossdomain: true},  function(data) {
            resolve( data )
        })
        .fail( () => reject( id_personaje ) )
    })
}

function onError( id_personaje ) {
    console.log( `Sucedió un error al obtener el id del personaje: ${id_personaje}` )
}

obtenerPersonaje(1)
    .then( function( data ) {
        console.log( `El personaje 1 es ${data.name}` )
        return obtenerPersonaje(2)
    } )
    .then( function( data ) {
        console.log( `El personaje 2 es ${data.name}` )
        return obtenerPersonaje(3)
    } )
    .then( function( data ) {
        console.log( `El personaje 3 es ${data.name}` )
        return obtenerPersonaje(4)
    } )
    .then( function( data ) {
        console.log( `El personaje 4 es ${data.name}` )
        return obtenerPersonaje(5)
    } )
    .then( function( data ) {
        console.log( `El personaje 5 es ${data.name}` )
        return obtenerPersonaje(6)
    } )
    .then( function( data ) {
        console.log( `El personaje 6 es ${data.name}` )
        return obtenerPersonaje(7)
    } )
    .then( function( data ) {
        console.log( `El personaje 7 es ${data.name}` )
    } )
    .catch( onError )