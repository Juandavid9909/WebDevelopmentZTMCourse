const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

// Promise.all([promiseOne, promiseTwo])
//     .then(data => console.log(data))
//     .catch(e => console.log("something failed", e));

// Retorna el arreglo con todas las promesas sin importar si hubo un error en alguna de ellas
Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(e => console.log("something failed", e));