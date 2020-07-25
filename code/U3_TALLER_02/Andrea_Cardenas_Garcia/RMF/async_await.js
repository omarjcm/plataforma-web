const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}
var datos= document.getElementById("datos");
function obtenerPersonaje(id){
    const URL='https://rickandmortyapi.com/api/character/:id'.replace(':id',id)

    return new Promise((resolve, reject) => {//declaro la promesa
        $.get(URL, OPT, data => resolve(data))
        .fail(()=>resolve("No se econtro"))
    })

}


function onError(id_personaje){
    console.log(`Sucedio un error al obterner el id del personaje: ${id_personaje}`)
}

async function obtenerPersonajes(cantidad){
    let tabla = new Array(cantidad);
    for( let i=0; i<cantidad; i++ ){
        tabla[i]=i+1;

    }
    //arreglo de promesas
    var promesas = tabla.map(id => obtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)
        //console.log(personajes)// lista todos los personajes
        for(personaje of personajes){//lista los personajes solo los nombres
           let p_nombre=document.createElement("p");
           let p_especie=document.createElement("p");
           let image=document.createElement("img");
           image.src=personaje.image
           let text_nombre=document.createTextNode(personaje.name)
           let text_especie=document.createTextNode(personaje.species)
            p_nombre.appendChild(text_nombre);
            p_especie.appendChild(text_especie);
            document.getElementById("datos").appendChild(p_nombre);
            document.getElementById("datos").appendChild(p_especie);
            document.getElementById("datos").appendChild(image);
            console.log(`${personaje.name}`)
            
        }
    }catch(id_personaje){
        onError(id_personaje)
    }
}

function cargardatos(){
    var dato= document.getElementById("datos");
    while(dato.firstChild){
        dato.removeChild(dato.firstChild);
    }
    obtenerPersonajes(10);
    
}