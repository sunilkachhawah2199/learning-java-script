console.log("hello world")
// js is dynamically typed language
// we don't need to specify the data type of variable
/* 
var --> global scope variable, value can be changed, re-declared
let --> block scope (recommended), can be updated, can't be re-declared, undefined when accessed before declaration
const --> block scope, can't be updated, can't be re-declared, must be initialized at the time of declaration
*/

let num=5;
let num1;
num1=10;

// multiple variable declaration
let a=10, b=20, c=30;

// undefined --> variable declared but not assigned
let aa;
console.log(a); // undefined

// naminf convention --> camelCase,
// wrong --> let 1abc --> not allowed 
// right --> abc1, _abc, $abc



// constant keyword --> const -----------------------------
// we make that value const which we don't want to change in future entire program
// we have to initialize const variable at the time of declaration
const p1=3.14; // constant
pi=10 // error not allowed in js