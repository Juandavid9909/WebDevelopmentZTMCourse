// Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false

// Context vs scope
function b() {
    let a = 4;
}

const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instantiation
class Player {
    constructor(name, type) {
        console.log("Player", this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${ this.name }, I'm a ${ this.type }`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("Wizard", this);
    }

    play() {
        console.log(`WEEEEE I'm a ${ this.type }`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me"
    }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);