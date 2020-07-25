const API_URL =  'https://rickandmortyapi.com/'
const OPT = {crossdomain: true}

function obtenerPersonaje(cargar){
    const url = 'https://rickandmortyapi.com/api/character/:id'.replace(':id',cargar)
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
        let HTML = "<table>";
        for (id_personajes of personajes) {
        HTML += "<tr><td>"+id_personajes.name+"        " +id_personajes.species+"       "  +id_personajes.image+"</td></tr>";


        }
        HTML += "</table>";
        document.getElementById("nombres").innerHTML = HTML;

    } catch (id_personaje){
        onError(id_personaje)
    }
}

function cargarPersonajes(){
    let cantidad = document.getElementById("cantidad").value;
    if(cantidad > 20 || cantidad < 1){
        alert("Cantidad invalida")
    }else{
      setTimeout(function(){cargar(cantidad)}, 2000)
      var Confirmacion = "Peticion Exitosa"
    let HTML1 = "<table>"
    document.getElementById("nombres").innerHTML= HTML1+Confirmacion;

    }
}
