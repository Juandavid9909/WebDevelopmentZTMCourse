const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Stuff worked");
    } else {
        reject("Error, it broke");
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "POOKIE");
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Is it me you are looking for?");
});

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    });

promise
    .then(result => result + "!")
    .then(result2 => result2 + "?")
    .catch(() => console.log("error!"))
    .then(result3 => result3 + "!");



// 2
const urls = [
    "http://jsonplaceholder.typicode.com/users",
    "http://jsonplaceholder.typicode.com/posts",
    "http://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => {
        return fetch(url)
            .then(response => response.json());
    }))
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    })
    .catch(() => console.log("error"));