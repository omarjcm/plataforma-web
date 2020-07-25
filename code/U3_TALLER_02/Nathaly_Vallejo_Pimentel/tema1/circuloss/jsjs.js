
function draw(pers) {

    var valor = document.getElementById('circle');
    var canvas = document.getElementById('circle');
    var x=75;
   for (let a =1;a<=pers;a++){
      
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
        
            ctx.beginPath();
            ctx.arc(75,x,50,0,Math.PI*2,true); 
           
            ctx.strokeStyle = '#000000';
            ctx.stroke();

          }
          x=x+150;
          console.log(x);
    }
    

  }
  function mostrar_datos(){
    var pers = document.getElementById("numero").value
    draw(pers)
}