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
