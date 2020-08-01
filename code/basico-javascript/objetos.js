var investigador = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    filiacion: 'Universidad Politécnica Salesiana',
    email: 'gpizarro@ups.edu.ec',
    edad: 37
}

function imprimirInvestigador( objeto ) {
    console.log( `${objeto.nombre} ${objeto.apellido}, ${objeto.email}` )
    console.log( `${objeto.filiacion}` )
}

imprimirInvestigador( investigador )

var imprimirInvestigador2 = function ( { filiacion, nombre } ) {
    console.log(  `${nombre}` )
    console.log(  `${filiacion}` )
}

imprimirInvestigador2( investigador )

function cumplirAnios_Ref( objeto ) {
    objeto.edad += 1
}

function cumplirAnios_Val( edad ) {
    return edad += 1
}

function cumplirAnios( objeto ) {
    return {
        ... objeto,
        edad: objeto.edad+1
    }
}

var otroInvestigador = {
    ... investigador
}


