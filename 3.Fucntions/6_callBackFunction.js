// for each loop is method of array
// when we ue function with object then it become method --> like we use function inside for each loop

// function can be passed as an argument to another function in java script

// Array.forEach(callBackFunction);

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
