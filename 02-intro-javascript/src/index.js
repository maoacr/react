
const nombre = 'Mario';
const apellido = 'Crespo';

// const nombreCompleto = nombre + ' ' + apellido;

//Template literals usando Backticks
const nombreCompleto = `Mi nombre es ${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo() {
  return 'Hola mundo'
};

console.log(`Este es un saludo: ${getSaludo()}`)

function getSaludo2(nombre) {
  return 'Hola mi nombre es ' + nombre;
};

console.log(`Este es un saludo: ${getSaludo2(nombre)}`)

//Con template literals podemos manejar los espacios que se rendizaran en nuestra aplicacion
console.log(`1,
    2,
3,
    4.
De esta      forma
`
)