let names = ["Sunil", "Kachhawah", "Jaipur"];

// length of array
console.log(names.length); // Output: 3

// push method --> add element at the end of array
names.push("Rajasthan"); // add element at the end of array

// unshift add element at the beginning of array
names.unshift("India");
console.log(names); // Output: [ 'India', 'Sunil', 'Kachhawah', 'Jaipur', 'Rajasthan' ]

// pop method --> remove element from the end of array and return the removed element
let remove = names.pop(); // remove element from the end of array and store in remove variable

// .toString() --> convert array to string
let conver = names.toString(); // convert array to string
console.log(names); // Output: [ 'Sunil', 'Kachhawah', 'Jaipur' ]
console.log(conver); // Output: Sunil,Kachhawah,Jaipur

// concat method --> join multiple array
let array1 = ["Sunil", "Kachhawah"];
let array2 = ["Jaipur", "Rajasthan"];

// join multiple array
let join = array1.concat(array2);
console.log(join); // Output: [ 'Sunil', 'Kachhawah', 'Jaipur', 'Rajasthan' ]

// shift remove element from the beginning of array and return the removed element

let remove1 = join.shift();
console.log(remove1); // Output: India

// slice method --> get the part of array
console.log(join);

let slice1 = join.slice(1, 3); // last is exclusive
console.log(slice1);

let splice1 = join.splice(1, 4);
console.log(splice1);

console.log(join);

// when we push array in array it is not a good practice, it will create a new array with the second array as the last element
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
first.push(second); //  [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
console.log(first);

// concat method --> join multiple array
const third = [11, 12, 13, 14, 15];
const fourth = [16, 17, 18, 19, 20];

let newArray = first.concat(third, fourth);

// spread operator --> ... || used to merge multiple array
let newArray2 = [...first, ...third, ...fourth];

const unreal = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, 11];
// flat method --> used to flatten the array
let flatArray = unreal.flat(2); // 2 is the depth of the array
let completeFlatArray = unreal.flat(Infinity); // Infinity is the depth of the array

// Array.from --> used to create an array from an array-like object
console.log(Array.from("Sunil"));

// Array.isArray --> used to check if the given value is an array
console.log(Array.isArray(newArray2));

// Array.of --> used to create an array from a variable number of arguments
const n1 = 5;
const n2 = 6;
const n3 = "Sunil";

console.log(Array.of(n1, n2, n3));
