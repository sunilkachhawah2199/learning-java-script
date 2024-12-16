//  compare and return boolean value
// same like java

let a = 3, b = 2;
console.log(a > b); // Output: true 


// if else ----------------------------------------------
let score = 150;
if (score > 100) {
    console.log("You are passed");
} else {
    console.log("You are failed");
}


// if else if ----------------------------------------------
if (score > 100) {
    console.log("You are passed");
} 
else if (score > 50) {
    console.log("You are avergae");
}
else {
    console.log("You are failed");
}


// The ternary operator is a shorthand way of writing an if...else statement.
// if the condition is true, the first expression is executed, otherwise, the second expression is executed.

let age=10;
age>18 ? console.log("adult") : console.log("child"); // Output: child