const ALTO = 1.8

class Persona {
    constructor(nombre, apellido, correo_electronico, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo_electronico = correo_electronico
        this.altura = altura    
    }

    saludar(fn) {
        console.log( `Hola, soy ${this.nombre} ${this.apellido}` )
        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }

    soyAlto() {
        return this.altura >= ALTO
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, correo_electronico, altura, tipo) {
        super(nombre, apellido, correo_electronico, altura)
        this.tipo = tipo
    }

    saludar(fn) {
        console.log( `Hola, soy ${this.nombre} ${this.apellido} y soy Desarrollador ${this.tipo}.` )
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log( `Hola, ${nombre} ${apellido}` )
    if (esDev) {
        console.log('No sabía que eras desarrollador.')
    }
}

function responderSaludo2(nombre, apellido) {
    console.log( `Hola, ${nombre} ${apellido}. Me presento.` )
}

var persona1 = new Persona('Alexander', 'Alava', 'aalava@est.ups.edu.ec', 1.6)
persona1.saludar( responderSaludo2 )
var persona2 = new Desarrollador('Roberto', 'Lindao', 'rlindaog@est.ups.edu.ec', 1.8, 'Junior' )
persona2.saludar( responderSaludo )