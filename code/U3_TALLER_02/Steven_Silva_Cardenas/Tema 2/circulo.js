
function draw(cantidad) {
    var valor = document.getElementById('circle');
    var canvas = document.getElementById('circle');
    var espacio=75;
    var lista=['#ffcc99','#ccffff','#ccffcc','#33ccff','#6699ff']
   for (let a =1;a<=cantidad;a++){      
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(75,espacio,50,0,Math.PI*2,true);     
            ctx.strokeStyle = lista[a];
            ctx.stroke();
          }
          espacio = espacio + 200;
          
    }
 }

function mostrar_circulos(){
    let cantidad = document.getElementById("cantidad").value;
    if(cantidad > 5 || cantidad < 1){
        alert("Cantidad invalida")
    }else{ 
        draw(cantidad);
    }
}
