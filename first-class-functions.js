console.log('--------The difference between function statement and function expression is hoisting--------');
greet(); // This will work because of hoisting .....think about execution context
// greetMe(); // This will not work because of hoisting

console.log('--------Function Statement aka function Declaration--------');
function greet() {
    console.log('This way of defining function is called Function Statement');
}
console.log('--------Function Expression--------');
var greetMe = function () {
    console.log('Function acts like a value and can be assigned to a variable');
    console.log('This way of defining function is called Function Expression');
}
greetMe();
console.log('--------Anonymous Function--------');
// function (){
//     console.log('Function without a name is called Anonymous Function');
// }

console.log('--------Named Function Expression--------');
var greetYou = function greetYou() {
    console.log('Function with a name is called Named Function Expression');
}
greetYou();

console.log('--------difference between parameters and Arguments?--------');
function greetWithParameters(param1, param2) {
    console.log('The values that we pass to the function are called Arguments');
    console.log('The variables that we define in the function are called Parameters');
    console.log('param1: ' + param1);
    console.log('param2: ' + param2);
}
greetWithParameters('Hello', 'World'); // Hello and World are arguments

console.log('--------First Class function--------');
function logGreeting(fn) {
    /**
     * First clas function is:
     * - The ability to use functions as values
     * - The ability to pass functions as arguments to other functions
     * - The ability to return functions as values from other functions
     * - Also called first class citizens
     */
    fn();
}

logGreeting(function () {
    console.log('Hello World');
}
);


console.log('--------Arrow Functions--------');
var greetArrow = () => {
    console.log('Arrow functions are a new way of defining functions');
}
