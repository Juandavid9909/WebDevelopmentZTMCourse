// Pregunta 1
const testArray = [1, 2, 4, 591, 392, "2", 391, 2, 5, 10, 2, "2", 1, 1, 1, 20, 20, "1", "1"];
compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
question1 = qArray => {
    let arr = testArray.map(number => number);
    arr.sort(compare);
    for (let strings = i = 0; i < arr.length - strings;)
        if (typeof arr[i] === "string") {
            arr.push(arr.splice(i, 1)[0]);
            strings++;
        } else i++;
    for (i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el === arr[i + 1]) {
            arr[i] = [el];
            for (let j = i + 1; arr[j] === el; arr.splice(j, 1))
                arr[i].push(arr[j]);
        }
    }
    return arr;
}

question1(testArray);


// Pregunta 2
const array = [1, 2, 3];
const number = 4;
question2 = (arr) => {
    arr.some((element, index) => {
        let slicedArr = arr.slice(index + 1);
        let filtered = slicedArr.filter(pair => element + pair === number);
        if (filtered.length === 1) {
            filtered.unshift(element);
            return true;
        }
    });
}

question2(array);


// Pregunta 3
const colorInput = document.getElementById("colorInput");
const colorOutput = document.getElementById("colorOutput");
const body = document.querySelector("body");
const headers = document.querySelectorAll("h1");
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
generateOutput = (color, type) => {
    let output = '';
    if (type === "hex") {
        if (color.length === 3) {
            color.forEach(element => {
                component = 16 * hex.indexOf(element) + hex.indexOf(element);
                output += `${component},`;
            });
        }
        if (color.length === 6) {
            color.forEach((element, index) => {
                if (index % 2 === 0)
                    component = 16 * hex.indexOf(element);
                else {
                    component += hex.indexOf(element);
                    output += `${component},`;
                }
            });
        }
        output = output.split(',');
        output.pop();
        body.style.backgroundColor = `rgb(${output})`;
    }
    if (type === "rgb") {
        output = '#';
        color = color.split(',');
        if (color.length === 3 && color[2] != "") {
            color.forEach((element, index) => {
                color[index] = Number(element);
                output += `${hex[Math.floor(element/16)]}${hex[element%16]}`
            });
            body.style.backgroundColor = `${output}`;
        }
    }
    colorOutput.value = output;

}
checkType = () => {
    let value = colorInput.value;
    if (value.includes(',')) {
        headers[0].innerHTML = "RGB";
        headers[1].innerHTML = "HEX";
        return generateOutput(value, "rgb");
    } else if (value.length != 0) {
        value = Array.from(value);
        headers[0].innerHTML = "HEX";
        headers[1].innerHTML = "RGB";
        if (value[0] === '#')
            value.shift();
        return generateOutput(value, "hex");
    } else {
        headers[0].innerHTML = "HEX || RGB";
        headers[1].innerHTML = "RGB || HEX";
        colorOutput.value = '';
    }
}
colorInput.addEventListener("keyup", checkType);