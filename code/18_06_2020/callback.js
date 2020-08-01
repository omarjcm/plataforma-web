const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const onPersonaRespuesta = function(persona) {
    console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje( id ) {
    const url = 'https://swapi.dev/api/people/:id/'.replace(':id', id)
    $
    .get(url, {crossdomain: true},  onPersonaRespuesta )
    .fail( function() {
        console.log( 'Sucedió un error. No se pudo obtener un mensaje.' )
    } )
}

for (let i=1; i<=100; i++)
    obtenerPersonaje( i )
