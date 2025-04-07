/*
json --> java script object notation
json is text format for storing and transporting data
json is self describing and easy to understand
Ex: json string --> '{"name":"John", "age":30, "car":null}'
it defined a object with 3 property
used to send data between 2 computers
json is language independent
similar to java script objects
we can store js object in text using JSON
*/

let person= {
    "name":"John", 
    "age":30, 
    "car":null
}
// access js object data
console.log(person.age); 
console.log(person["name"]) // balternate way for js object property

// modify js data
person.name="Sunil";
person["name"]="Anil";

// MIME type for json is --> application/json


// JSON.parse(), JSON,stringify() --> builtin function for convert json to js object