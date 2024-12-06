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
// x();// function bundled with its lexical scope is called closure.

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
// outer()(); // This is called closure. inner function bundled with its lexical scope.
// ()() this calls the inner function. outer() returns inner function and then () calls the inner function.

//-------------------------
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c); // C and parameter b are available in the scope of inner function because of closure.
            // a is already available in the parent's lexical scope. so it go up to a global scope.
        }
        let a = 10;
        return inner;
    }
    return outer;
}
let a = 30;
// outest()('Hello World')(); // 10 Hello World 20


//------Closure Hides the variable from the global scope
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1(); // 1
counter1(); // 2


var counter2 = counter(); // This creates a new closure
counter2(); // 1
counter2(); // 2

console.log('---------------------------Constructor Function---------------------------');
// Constructor Function
function Counter() {
    var count = 0;

    this.incrementCounter = function () { // forms a closure with count
        count++;
        console.log(count);
    }

    this.decrementCounter = function () { // forms a closure with count
        count--;
        console.log(count);
    }
}
var counter3 = new Counter();
counter3.incrementCounter(); // 1
counter3.incrementCounter(); // 2
counter3.decrementCounter(); // 1


