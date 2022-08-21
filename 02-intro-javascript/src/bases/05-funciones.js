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

//Desestructuracion de Arrays

const personajes = ['Goku', 'Vegeta', 'Trunks']

//Como podemos acceder a nuestros arrays y evitar esto? 
console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])


//Sin importar qué nombre le coloques al dato que vas a recibir, siempre sera el dato en la posicion [0]
const [personajeUno] = personajes;
console.log(personajeUno)

//Como hago para recibir el segundo otercer elemento?

//Debes trabajar con el caracter de la coma "," para definirla o indicar la posicion del elemenot que recibiras

//Para reciir el element en laposicion [1] que eqa segunda posicion, debes hacer lo siguiente
const [,personajeARecibir] = personajes;
console.log(personajeARecibir)

//Aqui recibimos la tercer posicion 
const [ , , personajeARecibir] = personajes;
console.log(personajeARecibir)



// Otro ejemplo
const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros)


Tarea
1. El primer valor del arreglo se llamra nombre
2. el segundo valor se llamara setNombre

const useState = () =>{
    return [ valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log( nombre );