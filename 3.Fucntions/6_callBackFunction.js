
// call back in js is a function that is passed as an arguement to another function.
// callback are used for asynchronous operations like fetch, read, handling events.

// in callback we need manual error handling

// callback functions --> that functions which is passed as an argument to another function is called a callback function, this function will execute for each element of the array

// forEach() method executes a provided function once for each array element

// forEach will pick every value from the array and pass it to the callback function
let arr=[1,2,3,4,5,6,7,8,9,10];


arr.forEach(function(value){
    console.log(value); // value --> is the element of the array
});

arr.forEach( (val) => {
    console.log(val);
});


// call back function can pass 3 parameters --> value, index(optional), array(optional)

arr.forEach( (val, idx, arr) => {
    console.log(val, idx, arr);
});


// higher order function --> a function that takes another function as an argument or returns a function is called a higher order function

function callback(){
    console.log("hello I am a callback function, I will be called by higher order functon")
}

function greet(name, callback){
    console.log("Hello "+name);
    callback();
}


greet("Sunil", callback);

// when need to call function --> function()
// when need to pass functio --> parameter(function)

// ----------------callback hell
/*
when we nest callback deeply, the code become hard to read ans maintain.
to handle this --> promise were intoduced
*/
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
    }, 1000);
}

// when more function called then it become un readable
step2(step1( () =>{
    console.log("i am from step 1 method");
}));