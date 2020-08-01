let saludo = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'No poseo web'

console.log( `Hola, ${saludo}` )
console.log( `Mi web es: ${web}` )