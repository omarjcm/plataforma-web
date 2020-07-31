function draw(pers) {

    var datos= document.getElementById("datos");

    for (let a =1;a<=pers;a++){
       
        var p_nombre = document.createElement("button");
        p_nombre.style.backgroundColor = 'red';
        p_nombre.style.width = '50px';
        p_nombre.style.height='50px';
        p_nombre.style.margin='10px';
        p_nombre.style.borderRadius='50%';
        p_nombre.style.display='block';
        datos.appendChild(p_nombre);
   }

  }
  function mostrar_datos(){
    var pers = document.getElementById("numero").value
    draw(pers)
}