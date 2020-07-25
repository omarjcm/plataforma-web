const API_URL = 'https://rickandmortyapi.com/'
const PEOPLE_URL = 'api/character/:id'
const OPT = {crossdomain: true}
const cantidad=10

function obtenerPersonaje(id, callback){
    const url = 'https://rickandmortyapi.com/api/character/:id'.replace(':id',id)
    
    return new Promise((resolve, reject) =>
    $
    .get(url, {crossdomain: true}, function(data){
        resolve(data)
    })
    .fail( () => reject(resolve("No se encontró ningún dato")) )
    )
}

function onError(id_personaje){
    console.log(`Error an id: ${id_personaje}`)
}

async function cargarPersonaje(cantidad){
    let ids = []
    for (let i =0; i < cantidad; i++) {
        ids.push(i+1)
    }
    let promesas = ids.map(id => obtenerPersonaje(id))
    try { 
        let personajes = await Promise.all(promesas)
        let HTML = "<table>";
        for (personaje of personajes) { 
        HTML += "<tr><td>Nombre: "+personaje.name+" Especie: "+personaje.species+" Imagen: "+personaje.image+"</td></tr>";
        }
        HTML += "</table>";
        document.getElementById("datos").innerHTML = HTML;

    } catch (id_personaje){
        onError(id_personaje)
    }
}

function mostrarPersonajes(){
        cargarPersonaje(cantidad);
}