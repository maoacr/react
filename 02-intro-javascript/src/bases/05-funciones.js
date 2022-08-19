//Funciones en Js

//Forma NO recomendada de crear funciones
function saludar(nombre){
    return `Hola ${ nombre }`
}

//Puede ser sobreescrito su valor
saludar=30


//forma recomendada de declarar Arrays
const saludar2 = function(nombre) {
    return `Hola ${ nombre }`
}

//Otra forma de hacer funciones

//Arrow function
const funcion2 = (nombre) => {
    return `Hola ${nombre}`
}

//Una forma simplificada de una arrow function cuando solo retorna una cosa
const funcion3 = (nombre) => `Hola ${nombre}`
const funcion4 = () => `Hola mundo`

//Y si quiero retornar  Objetos con funciones de tipo flecha...
const objetos = () => ({uid: "ABC1234", username: "Pepito65456"})
console.log(objetos())


//Ejercicio
//1. Transformar a una funcion tipo flecha
//2. Tiene que retornar un objeto implicito
//3. Probar que funcione correctamente
// function getUsuarioActivo(nombre){
//     return{
//         uid: 'XYZ999',
//         usename: 'nombre'
//     }
// }

// const usuarioActivo = getUsuarioActivo('Mao')
// console.log(usuarioActivo)

//Solucion al ejercicio

const getUsuarioActivo = (nombre) => ({uid: 'XYZ999',usename: nombre})
console.log(getUsuarioActivo('Mao'))