const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (fn) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(fn(this[i]));
    }

    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

/**
 * A function which takes another function as an argument, or returns a function as a result is called a higher order function.
 */