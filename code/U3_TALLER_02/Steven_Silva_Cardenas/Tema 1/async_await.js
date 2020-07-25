const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}
var datos= document.getElementById("Tabla");
function obtenerPersonaje(id){
    const URL='https://rickandmortyapi.com/api/character/:id'.replace(':id',id)

    return new Promise((resolve, reject) => {
        $.get(URL, OPT, data => resolve(data))
        .fail(()=>resolve("FALLO"))
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

    var promesas = tabla.map(id => obtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)

        for(personaje of personajes){
           let Caption1=  document.createElement("C");
           let Caption2=document.createElement("c");
           let image=document.createElement("img");
           image.src=personaje.image
           let text=document.createTextNode(personaje.name)
           let text2=document.createTextNode(personaje.species)

            Caption1.appendChild(text);
            Caption2.appendChild(text2);
            document.getElementById("Tabla").appendChild(Caption1);
            document.getElementById("Tabla").appendChild(Caption2);
            document.getElementById("Tabla").appendChild(image);
            console.log(`${personaje.name}`)

        }
    }catch(id_personaje){
        onError(id_personaje)
    }
}

function cargardatos(){
    var dato= document.getElementById("Tabla");
    while(dato.firstChild){
        dato.removeChild(dato.firstChild);
    }
    let cantidad= document.getElementById("personajes").value;
    if(cantidad>20 || cantidad<=0 ){
        alert("Ingrese una cantidad entre 1 y 20")
    }else{
        obtenerPersonajes(cantidad);
    }

}
