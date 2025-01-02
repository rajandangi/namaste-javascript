/**
 * Instead of Writing method inside object,
 * we can write method outside object and use call, apply or bind methods to share the method.
 */
const fullName = function(){
    console.log(this.firstName + ' ' + this.lastName);
}

const getHomeTown = function(hometown, state){
    console.log(this.firstName + ' ' + this.lastName + ' is from ' + hometown + ', ' + state);
}

const name = {
    firstName: 'Rajan',
    lastName: 'Dangi'
}

const name2 = {
    firstName: 'Bhawana',
    lastName: 'Dangi'
}

fullName.call(name); // Rajan Dangi
fullName.call(name2); // Bhawana Dangi

getHomeTown.call(name, 'Kathmandu', 'Bagmati'); // Rajan Dangi is from Kathmandu, Bagmati
getHomeTown.call(name2, 'Kathmandu', 'Bagmati'); // Bhawana Dangi is from Kathmandu, Bagmati


// apply method is same as call method but it takes array of arguments
getHomeTown.apply(name, ['Kathmandu', 'Bagmati']); // Rajan Dangi is from Kathmandu, Bagmati
getHomeTown.apply(name2, ['Kathmandu', 'Bagmati']); // Bhawana Dangi is from Kathmandu, Bagmati


// bind method is same as call method but it returns a new function
// Returned function can be called later
const fullNameBind = fullName.bind(name);
fullNameBind(); // Rajan Dangi
const fullNameBind2 = fullName.bind(name2);
fullNameBind2(); // Bhawana Dangi

