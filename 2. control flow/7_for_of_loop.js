let name=["John","Doe","Jane"];

// we use for of loop to iterate over array elements or string without caring about index

// same like java for each loop --> for of loop
// we use in Java --> :
// use of in js
for(let n of name){
    console.log(n);
}



// we use for in loop to iterate over object properties

let person={
    name:"John",
    age:25,
    city:"New York"
}

// for in loop get the key of object
for(let key in person){
    console.log(key); // Output: name, age, city
    console.log(person[key]); // Output: John, 25, New York
}