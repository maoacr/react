//Desestruturacion de objetos
//Asignacion desectructurante

const persona ={
    name: 'Mario',
    lastname: 'Crespo',
    edad: 29,
    ltdlng: {
        ltd: 6565865,
        lng: 5453650,
    }
}

//si queremos acceder a los datos de nuestro objeto sin hacer esto
console.log(persona.name)
console.log(persona.lastname)
console.log(persona.edad)

//podemos extraer la data de la siguiente forma
// const {name, lastname, edad} = persona

console.log(name)
console.log(lastname)
console.log(edad)

//tambien podemos definir valores por defecto de propiedades que no existen en el objeto que recibimos o definir nuevas propiedades asi

const destructuring = ( {name, lastname, nickname = "maoacr"} ) => {
    console.log(name, lastname, nickname)
}
console.log(destructuring(persona))
//En este caso el nickname no viene en el objeto persona, luego lo declaramos y definimos un valor por defecto


//Otro caso poco comun es la desestructuracion anidada
const {name, lastname, ltdlng:{ltd, lng}} = persona;