const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Value 1');
    }, 3000);
});

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Value 2');
        reject('Error');
    }, 1000);
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Value 3');
    }, 2000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then(function (values) {
        console.log(values);
    })
    .catch(function (err) {
        console.log(err);
    });

/**
 [
   {
        "status": "fulfilled",
        "value": "Value 1"
    },
    {
        "status": "rejected",
        "reason": "Error"
    },
    {
        "status": "fulfilled",
        "value": "Value 3"
    }
]
 */