// array is type of object in js
//way to declare array

let name=["Sunil","Kachhawah", "Jaipur"];
let array=new Array(1,2,3,4,5,6);

// array length
console.log(name.length); // Output: 3

// access element, same like java
console.log(name[0]); // Output: Sunil

name[0]="Shyam"; // change the value of array
console.log(name); // Output: [ 'Shyam', 'Kachhawah', 'Jaipur' ]

// iterate over the keys of array
// iterate over property of objects
for( let nam in name){
    console.log(nam); // Output: 0 1 2
    console.log(name[nam]); // Output: Shyam Kachhawah Jaipur
}

let per={
    name:"Sunil",
    age:25
}

for(let property in per){
    console.log(property); // name age
    console.log(per[property]); // sunil, 25
}

// use for in loop to iterate over array
for( let nam of name){
    console.log(nam); // Output: Shyam Kachhawah Jaipur
}