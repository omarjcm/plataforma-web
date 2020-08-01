const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPT = {crossdomain: true}

function obtenerPersonaje( id ) {
    const URL = 'https://swapi.dev/api/people/:id/'.replace(':id', id)

    return new Promise((resolve, reject) => {
        $
        .get(URL, OPT, data => resolve( data ))
        .fail( () => reject( id_personaje ) )
    })
}

function onError( id_personaje ) {
    console.log( `Sucedió un error al obtener el id del personaje: ${id_personaje}` )
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var promesas = ids.map( id => obtenerPersonaje( id ) )

    try {
        var personajes = await Promise.all( promesas )
        for (personaje of personajes) {
            console.log( `${personaje.name}` )
        }
    } catch( id_personaje ) {
        onError( id_personaje )
    }
}

obtenerPersonajes()