function mostrar_datos() {
	
	var valor = document.getElementById("valor");
	alert(valor.value)
	var elemento = document.getElementById("datos");
	for (var i = 0; i < valor.value; i++) {
  		va = "col"+i
		elemento.innerHTML += `<label id="${va}" class="circulo">${i}</label>`
	}
	var c = ["rgb(255, 102, 153)","rgb(255, 255, 102)",

 "rgb(102, 255, 255)",
 "rgb(255, 153, 255)",
 "rgb(0, 255, 0)",
 "rgb(51, 102, 204)",
 "rgb(255, 153, 0)",
 "rgb(102, 0, 51)",
 "rgb(153, 51, 51)",
"rgb(38, 0, 77)",
 "rgb(204, 255, 153)",
 "rgb(140, 255, 26)"];

	for (var i = 0; i < valor.value; i++) {
  		d = "col"+i
		var color = document.getElementById(d);
		color.style.background = c[i]

	}
	console.log(Math.random())
	datos.style.visibility = "visible";
	datos.style.display = "block";

}

	function ocultar_datos(){
	document.getElementById("datos").style.display = "none";
	}

