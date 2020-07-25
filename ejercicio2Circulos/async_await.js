const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const OPT = {croossdomain: true}


 function obtenerCirculos(cantidad){
    let tabla = new Array(cantidad);
    let colors= ["#3399ff","#ccff99","#33cc33","#0000cc","#993300","#669999"]

    for( let i=0; i<cantidad; i++ ){
        let circle=  document.createElement("div");
        aleatorio = Math.floor(Math.random()*(colors.length));
        seleccion = colors[aleatorio]
        var e = colors.indexOf( seleccion);
        colors.splice( e, 1 );
        circle.className="circulo"
        circle.style.backgroundColor = seleccion;

        document.getElementById("circulos").appendChild(circle);
          
        }
        
    }


function mostrar_datos(){
    var dato= document.getElementById("circulos");
    while(dato.firstChild){
        dato.removeChild(dato.firstChild);
    }
    let cantidad= document.getElementById("numero").value;
    if(cantidad>6 || cantidad<=0 ){
        alert("Ingrese una cantidad entre 1 y 5")
    }else{
        obtenerCirculos(cantidad);
    }
    
}