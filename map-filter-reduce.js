const arr = [2, 5, 10, 15];

// Filter,map and reduce is a higher order function because it takes another function as an argument
const output = arr.filter((num) => num > 2);
console.log(output);

//-------REDUCE--------
// Reduce function is used to reduce the array to a single value like sum of all the elements in the array
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// acc: accumulator, curr: current value, 0: initial value of the accumulator
const sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Sum by Reduce", sum);

const users = [
    { firstname: 'John', lastname: 'Doe', age: 30 },
    { firstname: 'Jane', lastname: 'Doe', age: 25 },
    { firstname: 'Jim', lastname: 'Carrey', age: 50 },
    { firstname: 'David', lastname: 'Doe', age: 30 }
];

// Array if full name
const fullName = users.map((user) => {
    let name = user.firstname + ' ' + user.lastname;
    return name;
});
console.log(fullName); // [ 'John Doe', 'Jane Doe', 'Jim Carrey', 'David Doe' ]

// Array with age and number of users with that age
const age = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(age); // { '25': 1, '30': 2, '50': 1 }


// First name of all the users whose age is less than 31
const youngUsers = users.filter((user) => user.age < 31).map(user => user.firstname);
console.log(youngUsers);

const youngUsersAgain = users.reduce((acc, u) => {
    if (u.age < 31) {
        acc.push(u.firstname);
    }
    return acc;
}, [])
console.log(youngUsersAgain);