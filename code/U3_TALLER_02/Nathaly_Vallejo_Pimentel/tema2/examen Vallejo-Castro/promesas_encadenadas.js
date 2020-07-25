const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'


function obtenerPersonaje(id, callback){
    const url='https://swapi.dev/api/people/:id/'.replace(':id',id)

    return new Promise((resolve, reject) => {//declaor la promesa
        $.get(url, {croossdomain: true}, function(data){//json
            resolve(data)
        })
        .fail(()=>reject(id_personaje))
    })

}

function onError(id_personaje){
    console.log(`Sucedio un error al obterner el id del personaje: ${id_personaje}`)
}

obtenerPersonaje(1)
    .then(function(data){//ejecuta promesa, callback
        console.log(`El personaje 1 es ${data.name}`)
        return obtenerPersonaje(2)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 2 es ${data.name}`)
        return obtenerPersonaje(3)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 3 es ${data.name}`)
        return obtenerPersonaje(4)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 4 es ${data.name}`)
        return obtenerPersonaje(5)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 5 es ${data.name}`)
        return obtenerPersonaje(6)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 6 es ${data.name}`)
        return obtenerPersonaje(7)
    })
    .then(function(data){//ejecuta promesa
        console.log(`El personaje 7 es ${data.name}`)
        
    })
    .catch(onError)