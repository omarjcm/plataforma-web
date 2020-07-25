const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}

var datos= document.getElementById("ImagenPersonajes");
function obtenerPersonaje(id){
const URL='https://rickandmortyapi.com/api/character/:id'.replace(':id',id)

return new Promise((resolve, reject) => {//declaro la promesa
    $.get(URL, OPT, data => resolve(data))
    .fail(()=>reject(resolve("No encontrado")))
})

}

function onError(id_personaje){
console.log(`Sucedio un error al obterner el id del personaje: ${id_personaje}`)    
}

async function obtenerPersonajes(numero){
    let imagenPersonajes = new Array(numero);
    for( let i=0; i<numero; i++ ){
        imagenPersonajes[i]=i+1;
    } 
var promesas = imagenPersonajes.map(id => obtenerPersonaje(id))

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
            document.getElementById("ImagenPersonajes").appendChild(P);
            document.getElementById("ImagenPersonajes").appendChild(P2);
			document.getElementById("ImagenPersonajes").appendChild(image);
            console.log(`${personaje.name}`)
    }
}catch(id_personaje){
    onError(id_personaje)
    }
}

    
function mostrar_datos(){
    var dato= document.getElementById("ImagenPersonajes");
    while(dato.firstChild){
        dato.removeChild(dato.firstChild);
    }
    let numero= document.getElementById("personajes").value;
    if(numero>20 || numero<=0 ){
        alert("Ingrese un numero del 1 al 20")
    }else{
        obtenerPersonajes(numero);
    }
}