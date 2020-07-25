const API_URL = 'https://rickandmortyapi.com/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}


function obtenerPersonaje(id){
const URL='https://rickandmortyapi.com/api/character/avatar/:id/'.replace(':id',id)

return new Promise((resolve, reject) => {
    $.get(URL, OPT, data => resolve(data))
    .fail(()=>reject(resolve("No encontrado")))
})

}

function onError(id_personaje){
console.log(`Sucedio un error al obterner el id del personaje: ${id_personaje}`)    
}

async function obtenerPersonajes(pers){
    let ids=[] //arreglo de promesas
    var maximo = pers;
    for (let a =1;a<=maximo;a++){
        ids.push(a);
    } 
var promesas = ids.map(id => obtenerPersonaje(id))

try{
    var personajes = await Promise.all(promesas)
    for(personaje of personajes){//lista los personajes solo los nombres
		let P=  document.createElement("P");
           let P2=document.createElement("p");
           let image=document.createElement("img");
           let text=document.createTextNode(personaje.name)
           let text2=document.createTextNode(personaje.species)
            P.appendChild(text);
            P2.appendChild(text2);
            document.getElementById("Tabla").appendChild(P);
            document.getElementById("Tabla").appendChild(P2);
            console.log(`${personaje.name}`)
    }
}catch(id_personaje){
    onError(id_personaje)
    }
}

    
function mostrar_datos(){
    var pers = document.getElementById("numero").value
    obtenerPersonajes(pers)
}