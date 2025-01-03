/**
 * Debouncing : It is a technique used to limit the rate at which a function is called.
 *
 * It's done by delaying the function execution when subsequent calls occur within the specified time interval.
 *
 * Throttling: Throttling is done by delaying the function execution for a specified time interval.
 */

const getData = (searchTerm) => {
    console.log('Fetching:', searchTerm);
}


const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this;
        // arguments is special built-in object that exists inside all non-arrow functions in js.
        let args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay)
    }
}

const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this
        args = arguments

        if (flag) {
            fn.apply(context, args)
            flag = false;

            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

const debounceGetData = debounce(getData, 300);

document.getElementById('search').addEventListener('input', function (e) {
    debounceGetData(e.target.value);
});


// -----Throttling----
const throttleGetData = throttle(getData, 400)

document.getElementById('search2').addEventListener('input', function (e) {
    throttleGetData(e.target.value);
});