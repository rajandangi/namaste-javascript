const cart = ['Shoes', 'Shirt', 'Pant', 'Socks'];
// const cart = [];


createOrder(cart)
    .then(function (orderId) {
        console.log('Order ID: ', orderId);
        return orderId;
    })
    .catch(function (err) {
        // this will only catch the error from the createOrder function
        console.log('Error: ', err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log('Payment Info: ', paymentInfo);
    })
    .catch(function (err) {
        console.log('Error: ', err.message);
    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // validate cart
        if (!validateCart(cart)) {
            const err = new Error('Invalid Cart');
            reject(err);
        }
        // Logic for create order
        const orderID = "ORD" + Math.floor(Math.random() * 1000);
        if (orderID) {
            setTimeout(function () {
                resolve(orderID);
            }, 5000);
        }
    })
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Payment Done for Order ID: ' + orderId);
        }, 5000);
    })
}

function validateCart(cart) {
    if (cart.length) {
        return true;
    }
    return false;
}

/**
 * Promise { <Prototype>: Promise, <PromiseState>: "pending", <PromiseResult>: undefined }
 */


/**
 * Promise is an object representing the eventual completion or failure of an asynchronous operation.
 *
 * Promise have three states:
 * 1. Pending
 * 2. fulfilled
 * 3. rejected
 * - Promise objects are immutable.
 * - resolve and reject can only be called once.
 *
 * Any catch statement will catch the error from any of the promise in the chain before it.
 */