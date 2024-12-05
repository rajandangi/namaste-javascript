// Closures in JavaScript
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var x = x();
console.log(x);
x();// function bundled with its lexical scope is called closure.

/**
 * Uses of Closures:
 * 1. Module Design Pattern
 * 2. Currying
 * 3. Function like once
 * 4. Memoize
 * 5. maintaining state in async world
 * 6. setTimeouts
 * 7. Iterators
 * and many more...
 */


function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); // This is called closure. inner function bundled with its lexical scope.
// ()() this calls the inner function. outer() returns inner function and then () calls the inner function.