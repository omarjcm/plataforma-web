function mostrar_datos() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var edad = document.getElementById("edad");

    var elemento = document.getElementById("datos");
    elemento.setAttribute("display", "block");

    var p_nombre = document.createElement("p");
    var node = document.createTextNode("Nombre: " + nombre.value);
    p_nombre.appendChild(node);

    var p_apellido = document.createElement("p");
    node = document.createTextNode("Apellido: " + apellido.value);
    p_apellido.appendChild(node);

    var p_edad = document.createElement("p");
    node = document.createTextNode("Edad: " + edad.value);
    p_edad.appendChild(node);

    elemento.appendChild(p_nombre);
    elemento.appendChild(p_apellido);
    elemento.appendChild(p_edad);

    elemento.style.visibility = "visible";
    elemento.style.display = "block";
}