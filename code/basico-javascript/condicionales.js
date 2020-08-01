var estudiante = {
    nombre: 'Edilson',
    apellido: 'García',
    edad: 21,
    email: 'egarciap3@est.ups.edu.ec',
    ingles: true,
    educacion_fisica: false,
    programacion_hipermedial: true,
    fundamentos_programacion: false
}

function imprimirEstudiante( persona ) {
    console.log( `${persona.nombre} ${persona.apellido}` )
    
    if (persona.ingles) {
        console.log( 'Está cursando Inglés.' )
    }
    if (persona.educacion_fisica) {
        console.log( 'Está cursando Educación Física.' )
    }
    if (persona.programacion_hipermedial) {
        console.log( 'Está cursando Programación Hipermedial.' )
    }
    if (persona.fundamentos_programacion) {
        console.log( 'Está cursando Fundamentos de Programación.' )
    }
}

imprimirEstudiante( estudiante )

const MAYOR_EDAD = 18

// Tipo de Función Declarativa
function esMayorEdad( persona ) {
    return persona.edad >= MAYOR_EDAD
}

// Tipo de Función Expresiva
const esMayorEdad2 = function ( persona ) {
    return persona.edad >= MAYOR_EDAD
}

// Tipo de Función Flecha
const esMayorEdad3 = persona => persona.edad >= MAYOR_EDAD

console.log( esMayorEdad( estudiante ) )
console.log( esMayorEdad2( estudiante ) )
console.log( esMayorEdad3( estudiante ) )