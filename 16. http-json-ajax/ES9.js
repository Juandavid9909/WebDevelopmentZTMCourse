// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
};

const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

function objectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, rest);

sum(...array);


// finally
const urls = [
    "https://swapi.co/api/people/1",
    "https://swapi.co/api/people/2",
    "https://swapi.co/api/people/3",
    "https://swapi.co/api/people/4"
];

Promise.all(urls.map(url => {
        return fetch(url).then(people => people.json());
    }))
    .then(array => {
        console.log("1", array[0]);
        console.log("2", array[1]);
        console.log("3", array[2]);
        console.log("4", array[3]);
    })
    .catch(err => console.log("ughhhh fix it!", err))
    .finally(() => console.log("extra"));

// Async
const urls2 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async() => {
    try {
        const [users, posts, albums] = await Promise.all(urls2.map(async(url) => {
            const response = await fetch(url);
            return response.json();
        }));

        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (err) {
        console.log("ooooooops", err);
    }
}

const getData2 = async() => {
    const arrayOfPromises = urls2.map(url => fetch(url));

    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}

const loopThroughUrls = url => {
    for (let url2 of urls2) {
        console.log(url2);
    }
}