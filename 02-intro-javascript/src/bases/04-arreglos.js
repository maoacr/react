//Arreglos en Js


//Un arreglo se define con []
const arreglo = [1,2, 3, 4]


let arreglo2 = [...arreglo, 5]

//Existen varios metodos como el map() para acceder o modificar un areglo
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2
})

console.log(arreglo)
console.log(arreglo2)
console.log(first)