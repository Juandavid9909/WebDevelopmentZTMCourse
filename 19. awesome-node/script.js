const fs = require("fs");

// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    console.time("q = 1 santa-time");

    fs.readFile("santa.txt", (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split("");
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === "(") {
                return ++acc;
            } else if (currentValue === ")") {
                return --acc;
            }
        }, 0);

        console.timeEnd("q = 1 santa-time");
        console.log("floor:", answer);
    });
}

question1();

// 2 - When does Santa first enter the basement
function question2() {
    console.time("q = 2 santa-time");

    fs.readFile("./santa.txt", (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split("");

        let accumulator = 0;
        let counter = 0;

        const answer = directionsArray.some((currentItem) => {
            if (currentItem === "(") {
                accumulator++;
            } else if (currentItem === ")") {
                accumulator--;
            }

            counter++;
            return accumulator < 0;
        });

        console.timeEnd("q = 2 santa-time");
        console.log("Basement entered at:", counter);
    });
}

question2();