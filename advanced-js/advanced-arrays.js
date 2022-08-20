const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

// map, filter, reduce
// Map crea un nuevo arreglo
const mapArray = array.map(num => num * 2);

// Filter crea un nuevo arreglo con los elementos que cumplen con la condición
const filterArray = array.filter(num => num > 5);

// Reduce permite hacer operaciones con todos los elementos de un arreglo, el último valor es el valor inicial que le damos al acumulador
const reduceArray = array.reduce((accumulator, num) => accumulator + num, 0);