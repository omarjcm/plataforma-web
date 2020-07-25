const Alto = 1.8

function heredaDe(prototipoHijo, prototipoPadre){//herencia
    var fn = function(){}// se crea el objeto fn que es el callback
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, correo_electronico, altura){//objeto constructor
    this.nombre = nombre
    this.apellido = apellido
    this.correo_electronico = correo_electronico
    this.altura = altura
}


Persona.prototype.saludar = function(){ //funcion expresiva
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura >= Alto
}

//Persona.prototype.soyAlto = (altura) => altura >= 1.8 // funcion tipo flecha

function Desarrollador(nombre, apellido, tipo, correo_electronico, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.tipo  = tipo
    this.correo_electronico = correo_electronico
    this.altura = altura
}

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre} ${this.tipo} y soy Desarrollador ${this.tipo}`)
}

heredaDe(Desarrollador, Persona)//se aplica herencia

var persona = new Persona('Alexander', 'Alava', 'alava@est.ups.edu.ec', 1.6)
persona.saludar()//llamo al metodo

var persona2 = new Desarrollador('Roberto', 'Lindao', 'Junior', 'rlindaog@est.ups.edu.ec', 1.80)//doy valores al objeto
persona2.saludar()//llamo al metodo
//console.log(persona2.soyAlto(persona2.altura))//declarar en flecha
console.log(persona2.soyAlto())