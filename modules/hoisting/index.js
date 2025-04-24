getName();
console.log(x);

console.log(getName);

var x = 8;

var getName = () => {
    console.log("Hi Hoisting")
}

var getName2 = function() {
    console.log("Hi Hoisting")
}

function getName3() {
    console.log("Hi Hoisting")
}