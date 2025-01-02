let multiply = function (x, y) {
    console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 10

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // 15

let multiplyByFour = multiply.bind(this);
multiplyByFour(4, 5); // 20

/**
 * Currying is a functional programming technique where
 * - a function with multiple arguments is transformed into a series of functions, each taking a single argument
 * - Instead of taking all arguments at once, the curried function takes the first argument, returns a new function
 * that takes the next argument, and so on until all arguments are provided. The final function then returns the result.
 *
 * In the above example, the multiply function is curried by binding the first argument to a fixed value.
 * This creates a new function that takes the second argument and returns the result.
 */

let sum = function (a) {
    return function (b) {
        console.log(a + b);
    };
}
let addTwo = sum(2);
addTwo(3); // 5

/**
 * Function curring cab be achieved using two ways:
 * 1. Using bind method
 * 2. Using closure
 */