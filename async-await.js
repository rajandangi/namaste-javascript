// Handle promise using async-await
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved 2');
    }, 5000);
});

async function handlePromise() {
    // js engine will wait for the promise to resolve
    const result = await p;
    console.log("Console after await");
    console.log(result);

    // const result2 = await p;
    // console.log("Console after await 2");
    // console.log(result2);

    const result2 = await p2;
    console.log("Console after await 2");
    console.log(result2);
}
// handlePromise(); // Promise resolved


// Other way of handling promise
function getData() {
    console.log("------------------------");
    // js engine will not wait for the promise to resolve
    // it will execute the next line of code
    p.then((result) => {
        console.log(result);
    });
    console.log("console after promise.then");
}
// getData(); // Promise resolved

// ------------------------
const API_URL = 'https://api.github.com/users/rajandangi';

async function fetchData() {
    try {
        const data = await fetch(API_URL); // fetch function returns a promise
        const jsonData = await data.json(); // json function also returns a promise
        console.log(jsonData);
    } catch (err) {
        console.log(err);
    }
}
fetchData();

// Error handling also can be done using cath like below
// fetchData().catch((err) => { console.log(err); });