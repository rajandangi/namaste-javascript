// What is a callback function?
/**
 * A function that is passed as an argument to another function is called a callback function.
 */
setTimeout(function () {
    console.log('Hello World');
}, 5000);

function x(y) {
    console.log('x');
    y();
}

x(function y() {
    console.log('y');
});

// Javascript is synchronous and single-threaded language.
// Blocking the main thread
// Power of callback functions
// Deep about Event Listeners
document.getElementById('btn-one').addEventListener('click', function xyz() {
    console.log('Button Clicked');
});

// Closures Demo with Event Listeners
function attachEventListeners() {
    let count = 0;
    document.getElementById('btn-two').addEventListener('click', function xyz() {
        console.log('Button Clicked ' + ++count);
    });
}
attachEventListeners();
// Scope Demo with Event Listeners
// Garbage Collection & removeEventListener