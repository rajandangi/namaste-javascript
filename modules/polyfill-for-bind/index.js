/**
 * Polyfill: it is a piece of code that provides the fallback for the functionality that is not supported by the browser.
 *  In this case, we are providing the fallback for the bind method.
 */

const name = {
    firstName: 'John',
    lastName: 'Doe'
}

function printName(homeTown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown + ', ' + state);
}

const printMyName = printName.bind(name, 'Salyan');
printMyName("Karnali"); // John Doe


/**
 *
 * args[0] : this is the object on which we are calling myBind
 * args.slice(1) : this is the rest of the arguments passed to the myBind function
 *
 * args2 : this is the rest of the arguments passed to the function returned by myBind
 */
Function.prototype.myBind = function (...args) {
    return function (...args2) {
        // this refers to the function on which we are calling myBind i.e. printName
        this.apply(args[0], [...args.slice(1), ...args2]);
    }
}

const printMyName2 = printName.myBind(name, 'Salyan');
printMyName2("Karnali"); // John Doe