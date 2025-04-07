/* hoisting : In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
variable can be hoisted but intialization can not be hoisted

*/

// display number
console.log(number); // undefined
var number = 5;


/*
* behavior of hoisting depends on the type of variable or function --> like var, let, const
var --> when var is hoisted it is declared and initialized with undefined
let, const --> when let or const is hoisted it is declared but not initialized

*/
// use the message variable before declaration

console.log(message); // ReferenceError: Cannot access 'message' before initialization | it will show undefined in case of var type variable

// variable declaration using let keyword
let message;

/*

types: variable hoisting, function hoisting

# variable hoisting: 
variable can be used before declaration

# function hoisting: function can be used before declaration


*/

// use test variable before declaring
console.log(test); // undefined --> due to hoisting test variable is declared but not initialized, it will be initialized at its original position

// declare and initialize test variable
var test = 5;

/* function hoisting --> function can be used before declaration
In JavaScript, a variable is hoisted only to the top of its current scope. Let's look at how this works inside functions like if variable is blocked scoped then it will be hoisted to the top of the block where it is defined.
*/

greeting();  // call the function before declaration

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
}