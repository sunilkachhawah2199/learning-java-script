// map method ---------------------------------------------------------------------------------------------
// it is also a higher order function

// map() method creates a new array with the results of calling a provided function on every element in the calling array

let array = [1,2,3,4,5,6,7,8,9,10];

let newArray = array.map( (val) => {
    return val * 2;
});

console.log(newArray);

// filter method ---------------------------------------------------------------------------------------------
// it is also a higher order function
//  filter() method creates a new array with all elements that give true for the provided function

let newArray1 = array.filter( (val) => {
    if(val>5) return true;
});

console.log(newArray1);

// reduce method ---------------------------------------------------------------------------------------------
// it is also a higher order function
// reduce() --> perform some operation on the array and return a single value & reduce the array to a single value

let output= array.reduce( (previous, current) => {
    return previous + current;
})

console.log(` reduce method output: ${output}`);

console.log(array);


// example to return largest value from the array using reduce method

let largest=array.reduce( (previous, curr) =>{
    return previous>curr ? previous : curr;
})

console.log(`largest value from the array: ${largest}`);