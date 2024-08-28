// string is immutable in js and java
let name="Sunil kachhawah";
let address='Jaipur';
console.log(name.length); // Output: 15
console.log(name.toUpperCase()); // Output: SUNIL KACHHAWAH
console.log(name.toLowerCase()); // Output: sunil kachhawah
console.log(name.charAt(0)); // Output: S
console.log(name[0]); // Output: S

// template literals
console.log(`Hello ${name} your address is ${address}`); // Output: Hello Sunil kachhawah your address is Jaipur


// all string methods
console.log(name.indexOf('k')); // Output: 6
console.log(name.lastIndexOf('a')); // Output: 14
console.log(name.includes('k')); // Output: true
console.log(name.startsWith('S')); // Output: true
console.log(name.endsWith('h')); // Output: true
console.log(name.substring(0,5)); // Output: Sunil
console.log(name.slice(0,5)); // Output: Sunil
console.log(name.slice(-5)); // Output: hawah

// split method --> convert string to array
console.log(name.split(' ')); // Output: [ 'Sunil', 'kachhawah' ]

// string concatination
let fname="Sunil";
let lname="Kachhawah";
console.log(fname.concat(" ",lname)); // Output: Sunil Kachhawah

// replace method --> first argument is the string to be replaced and second argument is the string to be replaced with
console.log(name.replace('Sunil','Suni')); // Output: Suni kachhawah 
