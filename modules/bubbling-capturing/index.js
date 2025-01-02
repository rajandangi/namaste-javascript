/**
 * 1. Bubbling: Event starts from the target element and bubbles up to the root element.
 * 2. Capturing: Event starts from the root element and trickles down to the target element.
 */
document.querySelector('#grandparent').addEventListener('click', function () {
    console.log('Grandparent clicked');
}, true); // true: Capturing, false: Bubbling

document.querySelector('#parent').addEventListener('click', function () {
    console.log('Parent clicked');
}, true);


document.querySelector('#child').addEventListener('click', function (e) {
    console.log('Child clicked');
    e.stopPropagation(); // Stop bubbling
}, false);