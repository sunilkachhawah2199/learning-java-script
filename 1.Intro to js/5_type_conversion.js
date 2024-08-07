/*
type of conversion
1. implicit type conversion : automatic type conversion
2. explicit type conversion : manual type conversion
*/

/* implicit type conversion 
Implicit conversion to number
1. When we apply arithmatic on a numeric string, the string is converted to a number
2. When we apply arithmatic on a boolean, the boolean is converted to a number (true=1, false=0)
3. When we apply arithmatic on a null, the null is converted to a number (null=0)
4. When we apply arithmatic on a undefined, the undefined is converted to a number (undefined=NaN)
5. When subtracting a string from another string, JavaScript attempts to convert both strings to numbers.


*/
// explicit type conversion
let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof(result));

// convert boolean to string
result = String(true);
console.log(result, "-", typeof(result));

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof(result));


// anything to number
result= parseInt("5.5"); // 5

result=Number("5.5"); // 5.5


// anything to string
result=String(5); // "5"