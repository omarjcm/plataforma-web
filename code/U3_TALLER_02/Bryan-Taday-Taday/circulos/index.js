var lista=['blue','lime','red','yellow','black']
function mostrar(){
  var numero=document.getElementById('numero');
  var txt="<div class='circulo' style='background-color: blue;'></div>"
  var etiqueta=""
  for (var i = 0; i < numero.value; i++) {
    etiqueta+="<div class='circulo' style='background-color: "+lista[i]+";'></div>"
  }
  var datos=document.getElementById('datos');

  datos.innerHTML = etiqueta;

}
