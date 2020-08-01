const ALTO = 1.8

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, correo_electronico, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.correo_electronico = correo_electronico
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log( `Hola, soy ${this.nombre} ${this.apellido}` )
}

Persona.prototype.soyAlto = function () {
    return this.altura >= ALTO
}

function Desarrollador(nombre, apellido, tipo, correo_electronico, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.tipo = tipo
    this.correo_electronico = correo_electronico
    this.altura = altura
}

Desarrollador.prototype.saludar = function () {
    console.log( `Hola, soy ${this.nombre} ${this.apellido} y soy Desarrollador ${this.tipo}.` )
}

heredaDe( Desarrollador, Persona )

var persona = new Persona('Alexander', 'Alava', 'aalava@est.ups.edu.ec', 1.6)
persona.saludar()

var persona2 = new Desarrollador( 'Roberto', 'Lindao', 'Junior', 'rlindaog@est.ups.edu.ec', 1.8 )
persona2.saludar()
console.log( persona2.soyAlto() )