//EJERCICIO 1
var numbers = [5, 32, 43, 4];
var resultado = numbers.filter(function(n) { return n % 2 !== 0; });
console.log(resultado);



//EJERCICO 2
var people = [{
    id: 1,
    name: "John", age: 28
    }, {
    id: 2,
    name: "Jane", age: 31
    }, { 
    id: 3,
    name: "Peter", age: 55 
}]; 
var menores_35 = people.filter(function(person) {
    return person.age < 35;
});
console.log(menores_35);



//EJERCICIO 3
let people = [ 
    { name: "bob", id: 1 }, 
    { name: "john", id: 2 }, 
    { name: "alex", id: 3 }, 
    { name: "john", id: 3 } 
]; 
function contarNombre(arr) {
    // Objeto para almacenar las frecuencias de los nombres
    let nameCount = {};
    // Recorrer el arreglo de personas
    arr.forEach(function(person) {
        // Obtener el nombre de la persona
        let name = person.name;
        // Si el nombre ya existe en el objeto nameCount, incrementar su contador
        if (nameCount[name]) {
            nameCount[name]++;
        } else {
            // Si el nombre no existe, inicializar su contador en 1
            nameCount[name] = 1;
        }
    });
    return nameCount;
}
let nameOccurrences = contarNombre(people);
console.log(nameOccurrences);



//EJERCICIO 4
var myArray = [1, 2, 3, 4];
function printMinMax(arr) {
    // Obtener el número máximo usando Math.max
    let max = Math.max(...arr);
    // Obtener el número mínimo usando Math.min
    let min = Math.min(...arr);
    // Imprimir los resultados en consola
    console.log("Número máximo:", max);
    console.log("Número mínimo:", min);
}
// Llamar a la función con el arreglo myArray
printMinMax(myArray);




//EJERCICO 5
var object = { 
    key1: 10, 
    key2: 3, 
    key3: 40, 
    key4: 20 
}; 
function sortObjectByValue(obj) {
    // Convertir el objeto a un arreglo de objetos [{ key: clave, value: valor }]
    var arr = Object.keys(obj).map(function(key) {
        return { key: key, value: obj[key] };
    });
    // Ordenar el arreglo de objetos basado en el valor (value)
    arr.sort(function(a, b) {
        return a.value - b.value;
    });
    return arr;
}
var sortedArray = sortObjectByValue(object);
console.log(sortedArray);
