//Variables y constantes

//const como palabra reservada para valores que NO van a cambiar NUNCA durante la ejecucion de nuestro programa
const nombre = 'Mario';
const apellido = 'Crespo';

//let como palabra reservada para valores que SI pueden cambiar durante la ejecucion de nuestro programa
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
  //Este tipo de valores son Block Scope (ES6)
  let valorDado = 6;
  const nombre = 'Alejandro';
  console.log(valorDado);
  console.log(nombre);
}

console.log(valorDado);