const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Value 1');
    }, 3000);
});

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Value 2');
        // reject('Error');
    }, 1000);
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Value 3');
        reject('Error');
    }, 2000);
});

Promise.race([promise1, promise2, promise3])
    .then(function (values) {
        console.log(values);
    })
    .catch(function (err) {
        console.log(err);
    });

/**
 * Output: Value 2
 *
 * Value of the promise which is resolved first will be the output.
 */