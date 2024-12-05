function x() {
    var i = 99;
    setTimeout(function () {
        console.log(i); // Prints after 3 seconds and after "Hello" console.log
    }, 3000);
    console.log('Hello');
}

// x();

// // ----------------------------------------------------------
function y() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // Prints 6 five times because of closure
            // By the time setTimeout runs, the loop has already finished and the value of i is 6.
            // Closures in Js uses references to the variables, not the actual value.

        }, i * 1000);
    }
    console.log('Hello');
}
// y();

//--- How can we fix this issue?
function z() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // Prints 1, 2, 3, 4, 5
            // let is block scoped and it creates a new i for each iteration.
        }, i * 1000);
    }
    console.log('Hello');
}
// z();

//--- Another way to fix this issue
function a() {
    for (var i = 1; i <= 5; i++) {
        function fixIt(i) {
            setTimeout(function () {
                console.log(i); // Prints 1, 2, 3, 4, 5
            }, i * 1000);
        }
        fixIt(i); // This forms a closure and it captures the value of i at that point in time.
        // (function (i) {
        //     setTimeout(function () {
        //         console.log(i); // Prints 1, 2, 3, 4, 5
        //     }, i * 1000);
        // })(i);
    }
    console.log('Hello');
}
a();