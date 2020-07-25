const Alto = 1.8

class Persona {
    constructor(nombre, apellido, correo_electronico, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.correo_electronico = correo_electronico
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
        if(fn){//mando funcion como parametro o cualwuier funcion
            fn(this.nombre, this.apellido, false)
        }
    }

    soyAlto(){
        return this.altura >= Alto

    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, correo_electronico, tipo){
       super(nombre, apellido, correo_electronico, altura)
       this.tipo = tipo
    }

    saludar(fn){
        console.log(`Hola, soy ${this.nombre} ${this.tipo} y soy Desarrollador ${this.tipo}`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDes){//funcion parametro
    console.log(`Hola, ${nombre} ${apellido}`)
    if(esDes){
        console.log('No sabia que eras desarrollador')
    }
}

function responderSaludo2(nombre, apellido){//funcion parametro
    console.log(`Hola, ${nombre} ${apellido}. Me presento`)
}

var persona1 = new Persona('Alexander', 'Alava', 'alava@est.ups.edu.ec', 1.6)
persona1.saludar(responderSaludo2)

var persona2 = new Desarrollador('Roberto', 'Lindao', 'Junior', 'rlindaog@est.ups.edu.ec', 1.80)
persona2.saludar(responderSaludo)