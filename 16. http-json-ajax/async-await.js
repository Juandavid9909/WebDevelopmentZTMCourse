async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();

    console.log(data);
}

const urls = [
    "http://jsonplaceholder.typicode.com/users",
    "http://jsonplaceholder.typicode.com/posts",
    "http://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url)
                .then(response => response.json());
        }));

        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch (err) {
        console.log(err);
    }
}