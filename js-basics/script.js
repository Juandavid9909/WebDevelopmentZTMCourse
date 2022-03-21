4 + 3;


// Conditionals
if (4 + 3 === 7) {
    console.log("Helloooooo");
}


// Functions
function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    }

    return a * b;
}

let total = multiply(5, 10);
// alert(total);


// Arrays
let list = [
    ["tiger", "cat", "bear", "bird"]
];

list.shift(); // Delete tiger
list.pop(); // Delete bird
list.splice(0, 1); // Delete cat (index, quantity)
list.push("elephant"); // Add elephant
list.concat(["bee", "deer"]); // Juntar 2 arreglos, pero no afecta el arreglo original
list.sort();

let myNewList = myList.concat(["monkey"]); // Ahora sí se guarda el arreglo actualizado y list seguirá en su forma original

let mixedList = ["apples", 3, undefined, true, function apple() {
    console.log("apples");
}];


// Objects
let user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["Abrakadra", "shazam", "boo"],
    shout: function() {
        console.log("Auchhhhhh!");
    }
};

let list2 = [{
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];

user.favouriteFood = "spinach"; // Actualiza los items sin necesidad de estar declarados
user.isMarried = true;
user.shout();


// Loops
let todos = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy"
];

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
})

todos.forEach(logTodos);

for (let i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
    // todos.pop();
}

let counterOne = 0;

while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

let counterTwo = 10;

do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0)


// Function declaration
function newFunction() {

}

// Function expression
let newFunction = function() {

}


// Expression
1 + 3;
let a = 2;
return true;

// Calling or invoking a functino
alert();
newFunction(param1, param2);

// Assign a variable
let b = true;

// Function vs method
function thisIsAFunction() {

}

let obj = {
    thisIsAMethod: function() {

    }
}

thisIsAFunction();
obj.thisIsAMethod();