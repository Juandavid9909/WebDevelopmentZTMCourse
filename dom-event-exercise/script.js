var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

items.forEach(function(item) {
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");

    btn1.innerHTML = "Done";
    btn2.innerHTML = "Delete";

    item.appendChild(btn1);
    item.appendChild(btn2);

    btn1.addEventListener("click", () => {
        item.classList.toggle("done");
    });

    btn2.addEventListener("click", () => {
        item.parentNode.removeChild(item);
    });
});

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
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);