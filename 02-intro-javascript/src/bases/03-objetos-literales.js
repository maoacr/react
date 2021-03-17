//Creamos un objeto con datos del tipo llave:valor y objetos anidadados
const persona = {
  nombre: 'Mao',
  apellido: 'Crespo',
  edad: 27,
  direccion: {
    ciudad: 'Bogotá',
    zip: 5475475,
    lat: 879.87678,
    lng: 74.768768,
  }
};

//Si queremos hacer una segunda persona, no podemos hacer lo siguiente
const persona2 = persona;
//Esto simplemente es almacenar la referencia del espacio en memoria de persona a persona2 por lo tanto será el mismo objeto



//De esta manera haciendo destructuring si creamos un nuevo objeto con los valores del objeto persona
const persona3 = { ...persona };
persona3.nombre = 'El pepe'

//Despues de modifica el valor de nuestro ultimo objeto podemos verificar los valores de todas las personas y ver que el ultimo es un objeto independiente
console.log(persona);
console.log(persona2);
console.log(persona3);