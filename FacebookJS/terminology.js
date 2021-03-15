// function declaration
function newFunction() {

}

// function expression
var newFunction = function() {

};

// expression
1 + 3;
var a = 2;
return true;

// calling or invoking a function
alert();
newFunction(param1, param2);

// assign a variable
var a = true;

// function vs method
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function() {

    }
}

thisIsAFunction();
obj.thisIsAMethod();

// loop
var todosImportant = ["clean room!", "brush teeth!", "exercise!", "study javascript!", "eat healthy"];

function logTodos(todo, i) {
    console.log(todo, i);
}

todosImportant.forEach(logTodos);