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