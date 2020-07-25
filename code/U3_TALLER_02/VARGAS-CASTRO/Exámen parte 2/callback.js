const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const onPersonaRespuesta = function(persona) {
    console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url='https://swapi.dev/api/people/:id/'.replace(':id',id)
    $.get(url, {croossdomain: true}, onPersonaRespuesta)//jquery
    .fail(function(){
        console.log('Sucedio un error. No se pudo obtener un mesnaje')
    })
}

for(let i=1; i<=100; i++)
    obtenerPersonaje(i)
