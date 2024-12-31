const GITHUB_API = 'https://api.github.com/users/rajandangi';

const user = fetch(GITHUB_API);
console.log(user);


/**
 * Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * 
 * Promise have three states:
 * 1. Pending
 * 2. fulfilled
 * 3. rejected
 * - Promise objects are immutable.
 * - resolves just once.
 */