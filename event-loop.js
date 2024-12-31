console.log('Start');

setTimeout(() => {
    console.log('callback');
}, 5000);

console.log('End');

// Let's create a code that will run for 10 seconds
let start = new Date().getTime();
let end = start;
while (end < start + 10000) {
    end = new Date().getTime();
}
console.log('While loop ended');

/**
 * Output:
 * Start
 * End
 * While loop ended
 *
 * This is because of the event loop in Javascript. The while loop is blocking the main thread and the callback function is waiting in the event queue. Once the while loop is done, the global execution context is popped off the stack and the event loop will pick the callback function from the event queue and execute it.
 * https://www.youtube.com/watch?v=nqsPmuicJJc&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=20
 *
 */
console.log('Start-again');

setTimeout(() => {
    console.log('callback-again');
}, 0);

console.log('End-again');

/**
 * Output:
 * Start
 * End
 *
 * Even though the timeout is 0, the callback function is still has to go through the event loop and wait for the main thread to finish. So, the callback function will be executed after the main thread is done.
 */