// arrow function --> is a short hand syntax for writing function expressions
// we use arrow function to write a function in a short hand syntax and who does small task

let greet1= function(){
    console.log("regular function");
}
greet1();

// arrow function without parameters
let greet =() =>{
    console.log("hello");
}

// arrow function with parameters
let greetName= (name) =>{
    console.log(`Hello ${name}`);
}


// return statement in arrow function
let area=(a,b)=>{
    return a*b;
}

console.log(`the area of rectangle is ${area(5,10)}`);


// calling the function
greet();
greetName("Sunil");


