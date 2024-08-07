// function declaration

function gree(){
    console.log('Hello');
}

greet(); // calling the function



// function expression: assigning a function to a variable

let greetExpression = function(){
    console.log("hello");
}

greetExpression(); // calling the function expression
console.log(typeof(greetExpression)); // function

// difference between greetExpression annd greeExpression(): greetExpression is a function expression and greetExpression() is a function call

greetExpression(); // calling the function expression


// function with parameters--------------------------------------------

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Sunil"); // calling the function with parameter


function area(a, b){
    return a*b; //return statement terminates the function and returns the value
}


console.log(`The area is ${area(5,10)}`); // calling the function with parameters
