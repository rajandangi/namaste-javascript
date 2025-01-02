"use strict";

// this in global scope
console.log(this); // globalObject - Window

// this inside a function
function myFunction() {
    // the value depends on strict/non-strict mode
    // in strict mode, it will be undefined
    // in non-strict mode, it will be globalObject - Window
    console.log(this);
}


// this substitution happens in non-strict mode only.
// If the value of keyword is undefined or null, this keyword will be globalObject - Window only in non-strict mode.

// this keyword value depends on how the function is called
myFunction(); // undefined
window.myFunction(); // globalObject - Window

// this inside object's method (functon inside object is called method)
const student = {
    name: 'Rajan',
    getName: function () {
        console.log(this);
        // console.log(this.name);
    }
};
student.getName(); // { name: 'Rajan', getName: [Function: getName] }

// call, apply and bind methods (sharing methods)
const student2 = {
    name: 'Bhawana'
}
// Using call method, we can borrow the method from another object.
student.getName.call(student2); // { name: 'Bhawana' } // method borrowing




// this inside arrow function
// Arrow function does not have its own this keyword
const obj = {
    name: 'Rajan',
    getName: () => {
        console.log(this);
    }
};
// this is inherited from the parent scope at the time of function creation
// in this case obj is created in global scope, so this will be globalObject - Window
obj.getName(); // globalObject - Window
/**
 * arrow functions particularly useful for callbacks and preserving context.
 * In arrow functions, their this value cannot be set by bind(), apply() or call() methods,
 * nor does it point to the current object in object methods.
 */



// this inside nested arrow function
const obj2 = {
    name: 'Rajan',
    getName: function () {
        // enclosing lexical context
        const inner = () => {
            console.log(this);
        }
        inner();
    }
};

// this is becasue arrow function is lexically scoped inside the function where it is defined
// inside function this is obj2 so the this inside arrow function inherit the this from the parent scope
obj2.getName(); // { name: 'Rajan', getName: [Function: getName] }




// this inside DOM elemets => reference to the HTML element
const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log(this); // <button>Click me</button>
});
