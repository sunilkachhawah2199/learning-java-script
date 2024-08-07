//  same as java
for(let  i=0;i<10;i++){
    console.log(i);
}


// for in loop ----------------------------------------------
// for in loop is used to iterate over the properties of an object

// person object 
let person = {
    name: 'John',
    age: 25,
    isAdult: true
};

for (let key in person) {
    console.log(key, person[key]);
}