const API_URL = 'https://rickandmortyapi.com/'
const OPT = {crossdomain: true}

function obtenerPersonaje(id, callback){
    const url = 'https://rickandmortyapi.com/api/character/:id/'.replace(':id',id)
     return new Promise((resolve, reject) =>
    $
    .get(url, {crossdomain: true}, function(data){
        resolve(data)
    })
    .fail( () => reject(resolve("No encontrado")) )
    )
}

function onError(id_personaje){
    console.log(`Error an id: ${id_personaje}`)
}


async function cargar(cantidad){
    let ids = []
    for (let i =0; i < cantidad; i++) {
        ids.push(i+1)
    }
    let promesas = ids.map(id => obtenerPersonaje(id))

    try { 
        let personajes = await Promise.all(promesas)
        let HTML = "<table border = '10px' align='center'>"
		let cantidad=1
        for (personaje of personajes) {
			if(cantidad==1)
			{
				HTML += "<tr><td>Nombre: "+personaje.name+ "<br>Especie: " + personaje.species + "<br><img src=' "+ personaje.image + "'></td>";
				cantidad+=1
			}
			else if(cantidad==4 || cantidad==7 || cantidad==10)
			{
				HTML += "</tr><tr><td>Nombre: "+personaje.name+ "<br>Especie: " + personaje.species + "<br><img src=' "+ personaje.image + "'></td>";
				cantidad+=1
			}
			else if(cantidad==2 || cantidad==3 || cantidad==5 || cantidad==6 || cantidad==8 || cantidad==9)
			{
				HTML += "<td>Nombre: "+personaje.name+ "<br>Especie: " + personaje.species + "<br><img src=' "+ personaje.image + "'></td>"
				cantidad+=1
			}
        }
        HTML += "</table>";
		console.log(HTML)
        document.getElementById("nombres").innerHTML = HTML;
    } catch (id_personaje){
        onError(id_personaje)
    }
}

function listar(){
    let cantidad = 10
		cargar(cantidad);
}

