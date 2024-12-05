
var b = 10;
let a = 20;
const c = 30;

{
    let a = 10;
    var b = 20;
    const c = 30;
    const d = 40;
    console.log('b', b); //20
    console.log('a', a); //10
    console.log('c', c); //30
}

console.log('b', b);// 20 // This called shadowing in javascript.
console.log('a', a);// 20
