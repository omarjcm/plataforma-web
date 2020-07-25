const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}
var datos= document.getElementById("Tabla");
function obtenerPersonaje(id){
    const URL='https://rickandmortyapi.com/api/character/:id'.replace(':id',id)

    return new Promise((resolve, reject) => {//declaro la promesa
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
    //arreglo de promesas
    var promesas = tabla.map(id => obtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)
        //console.log(personajes)// lista todos los personajes
        for(personaje of personajes){//lista los personajes solo los nombres
           let P=  document.createElement("P");
           let P2=document.createElement("p");




           let image=document.createElement("img");
           image.src=personaje.image
           let text=document.createTextNode(personaje.name)
           let text2=document.createTextNode(personaje.species)
            P.appendChild(text);
            P2.appendChild(text2);
            document.getElementById("Tabla").appendChild(P);
            document.getElementById("Tabla").appendChild(P2);
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