var button = document.getElementsByTagName("button")[0];

// Click, mouseleave
button.addEventListener("mouseleave", function() {
    console.log("CLICK!!!!!");
});

var button2 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === 13) {
        createListElement();
    }
}

button2.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);