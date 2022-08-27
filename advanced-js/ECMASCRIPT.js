// ES7 (ES2016)
const pets = ["cats", "dog", "bat"];
pets.includes("dog");

const square = (x) => x ** 2;
const cube = (y) => y ** 3;

// ES8 (ES2017)
"Turtle".padStart(10); // "          Turtle"
"Turtle".padEnd(10); // "Tutle          "

const fun = (a, b, c, d, ) => {
    console.log(a);
}

fun(1, 2, 3, 4, );

Object.values;
Object.entries;
Object.keys;

let obj = {
    username0: "Santa",
    username1: "Rudolf",
    usernam2: "Mr. Grinch"
};

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]); // Llaves
});

Object.values(obj).forEach(value => {
    console.log(value); // Valor en cada llave
});

Object.entries(obj).forEach(value => {
    console.log(value); // Crea un arreglo de 2 posiciones en cada iteración, [llave, valor]
});

Object.entries(obj).map(value => {
    return value[1] + value[0].replace("username", "");
});

// ES10 (ES2019)
const array = [1, [2, 3],
    [4, 5]
];
array.flat(); // Crea un nuevo arreglo y elimina un nivel de subarreglo en el arreglo original, se puede pasar un argumento para eliminar la cantidad de subniveles deseados
const entries = ["bob", "sally", , , , , , "cindy"];
entries.flat(); // También elimina los elementos vacíos

const entriesChaos = entries.flatMap(entry => entry + "!");

const userEmail = "        eddytheeagle@gmail.com";
const userEmail2 = "jonnydangerous@gmail        ";
userEmail.trimStart(userEmail);
usuerEmail2.trimEnd(userEmail2);

const userProfiles = [
    ["commanderTom", 23],
    ["derekZlander", 40],
    ["hansel", 18]
];

// Convierte el arreglo con sus subarreglos en un objeto
Object.fromEntries(userProfiles);

try {
    true + "hi";
} catch (error) {
    console.log("You messed up", error);
}

// ES2020
// BigInt
typeof 1n;
let valorMaximo = Number.MAX_SAFE_INTEGER;
238592462463n + 235n;

// Optional chaining operator ?
let will_pokemon = {
    pikachu: {
        species: "Mouse Pokemon",
        height: 0.4,
        weight: 30
    }
};

let andrei_pokemon = {
    raichu: {
        species: "Mouse Pokemon",
        height: 0.8,
        weight: 6,
        power: ""
    }
};

let weight = will_pokemon.pikachu.weight;
console.log("weight:", weight);

if (andrei_pokemon && andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
    console.log(weight2);
} else {
    let weight2 = undefined;
    console.log(weight2);
}

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

// Nullish Coalescing Operator ??
// let power = andrei_pokemon?.pikachu?.power || "no power";
let power = andrei_pokemon?.pikachu?.power ?? "no power";

// ES2021
const str = "ztm is the best of the best";
str.replaceAll("best", "worst");
