// primitive 7 types--> String number BigInt Symbol undefined null Boolean 
// non-primitive --> Object, Array, Function

// string ----------------------------------------------
let name="Suni";
let fName='Kachhawah';


// number ----------------------------------------------
let positiveNum= 5;
let num=10;
let negativeNum= -5;
let float=5.5;  
console.log(num, positiveNum,negativeNum,float);

// undefined ----------------------------------------------
let aa; // automatic it will be undefined
let ab=undefined; // we can assign explicitly undefined

// null ----------------------------------------------
let bb=null; // null is a value which represent nothing

// symbol ----------------------------------------------
// two symbols with the same description but both are different
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");

console.log(value1 === value2);  // false

// object ----------------------------------------------
// object hold data in key value pair
/* key is always string, value can be anything, 
key value pair is called property, object is collection of properties, 
object is reference type, object is mutable, object is dynamic, 
object is unordered, object is unindexed, object is iterable 
we can change key's value in const type object */
let person = {
    name: 'John',
    age: 25,
    isAdult: true
};

console.log(typeof(person)); // John
console.log(person.name); // John

person.name="Sunil";
console.log(person.name); // Sunil