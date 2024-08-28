// array is type of object in js
// array is object in js

let name=["Sunil","Kachhawah", "Jaipur"];
console.log(name.length); // Output: 3
console.log(name[0]); // Output: Sunil

name[0]="Shyam"; // change the value of array
console.log(name); // Output: [ 'Shyam', 'Kachhawah', 'Jaipur' ]


for( let nam in name){
    console.log(nam); // Output: 0 1 2
}

// use for in loop to iterate over array
for( let nam of name){
    console.log(nam); // Output: Shyam Kachhawah Jaipur
}
