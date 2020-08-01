function mostrar() {
    var nombre = document.getElementById('nombre')
    var apellido = document.getElementById('apellido')

    alert( `Hola, ${nombre.value} ${apellido.value}` )
}

function mostrar_div() {
    var nombre = document.getElementById('nombre')
    var apellido = document.getElementById('apellido')

    var datos = document.getElementById('datos')

    var lbl_nombre = document.createElement('label')
    var txt_nombre = document.createTextNode( `Nombre: ${nombre.value}` )
    lbl_nombre.appendChild( txt_nombre )

    var lbl_apellido = document.createElement('label')
    var txt_apellido = document.createTextNode( `Apellido: ${apellido.value}` )
    lbl_apellido.appendChild( txt_apellido )

    datos.appendChild( lbl_nombre )
    datos.appendChild( lbl_apellido )

    datos.style.visibility = 'visible'
    datos.style.display = 'block'
}