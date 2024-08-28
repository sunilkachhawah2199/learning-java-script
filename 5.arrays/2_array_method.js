
let names=["Sunil","Kachhawah", "Jaipur"];

names.push("Rajasthan"); // add element at the end of array

names.pop(); // remove element from the end of array and return the removed element
let remove=names.pop(); // remove element from the end of array and store in remove variable

let conver=names.toString(); // convert array to string
console.log(names); // Output: [ 'Sunil', 'Kachhawah', 'Jaipur' ]
console.log(conver); // Output: Sunil,Kachhawah,Jaipur


let array1=["Sunil","Kachhawah"];
let array2=["Jaipur","Rajasthan"];

// join multiple array
let join=array1.concat(array2);
console.log(join); // Output: [ 'Sunil', 'Kachhawah', 'Jaipur', 'Rajasthan' ]

// unshift add element at the beginning of array
join.unshift("India");
console.log(join); // Output: [ 'India', 'Sunil', 'Kachhawah', 'Jaipur', 'Rajasthan' ]

// shift remove element from the beginning of array and return the removed element

let remove1=join.shift();
console.log(remove1); // Output: India


// slice method --> get the part of array
console.log(join); // Output: [ 'Sunil', 'Kachhawah', 'Jaipur', 'Rajasthan' ]
let slice1=join.slice(1,3); // last is exclusive
console.log(slice1); // Output: [ 'Kachhawah', 'Jaipur' ]