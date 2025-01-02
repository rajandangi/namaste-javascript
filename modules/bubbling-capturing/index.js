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

/**
 * Event Delegation: Instead of adding event listeners to each element, we can add a single event listener to the parent element.
 * When the event is triggered, we can check the target element and perform the action.
 */
/*
document.querySelector('#parent').addEventListener('click', function (e) {
    if (e.target.id === 'child') {
        console.log('Child clicked');
    }
});

// Just adding event listener to the parent element, we can handle the click event of the child element. So, we can avoid adding event listeners to each element.
*/