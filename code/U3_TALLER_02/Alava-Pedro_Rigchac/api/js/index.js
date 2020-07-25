
$( document ).ready(function() {
    var datos = document.getElementById("datos");
	obtenerPersonajeS(datos)
});



const OPT = {crossdomain:true}
function obtenerPesonaje(id){
	const URL='https://rickandmortyapi.com/api/character/:id'.replace(':id',id)
	return new Promise((resolve,reject)=>{
		$.get(URL,OPT,data => resolve(data))
		.fail(()=>reject(id))
	
	})

	
}
function onError(id_personaje){
	console.log(`Sucedio un error al obtener el id del personaje: ${id_personaje}`)
}

async function obtenerPersonajeS(datos){
	var k = [1,2,3,4,5,6,7,8,9,10]
	
	var promesas = k.map(id => obtenerPesonaje(id))

	try{
		var personajes = await Promise.all(promesas)
		
		for(personaje of personajes){//nombre, especie e imagen del personaje.
			datos.innerHTML += `
			<div class="pasos" id="paso_1" >
	            <p >EL personaje es :${personaje.name}su especie es : ${personaje.species} <img width="70" height="70" src="${personaje.image}"> </p>
			</div>
			
			`
			
		}
		
	}catch(id_personaje){
		onError(id_personaje)
	}
}

