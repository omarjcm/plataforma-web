const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje( id, callback ) {
    const url = 'https://swapi.dev/api/people/:id/'.replace(':id', id)
    $
    .get(url, {crossdomain: true},  function(data) {
        console.log( `ID: ${id}, Personaje: ${data.name}` )
        if (callback) {
            callback()
        }
    } )
    .fail( function() {
        console.log( 'Sucedió un error. No se pudo obtener un mensaje.' )
    } )
}


obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6)
                })
            })
        })
    })
})