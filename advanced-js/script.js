// Scope
var b1 = "Can I access this?";

function bb() {
    var a = "Hello";
}


// Advanced control flow
// Condition ? expr1 : expr2

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Acces Denied";

// Switch
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;

        case "back":
            whatHappens = "you arrived home";
            break;

        case "right":
            whatHappens = "you found a river";
            break;

        case "left":
            whatHappens = "you run into a troll";
            break;

        default:
            whatHappens = "please enter a valid direction";
    }

    return whatHappens;
}

// let + const
const player1 = "bobby";
let experience1 = 100;
let wizardLevel1 = false;

if (experience1 > 90) {
    let wizardLevel1 = true;
}

// Destructuring
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const { player, experience } = obj;
let { wizardLevel } = obj;

const name = "john snow";

const obj1 = {
    [name]: "hello",
    [2 + 1]: "hihi"
}

// default arguments
function greet(name1 = "", age = 30, pet = "cat") {
    return `Hello ${ name1 } you seem to be ${ age - 10 }. What a lovely ${ pet } you have.`;
}

// Symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// arrow function
const add = (a, b) => a + b;