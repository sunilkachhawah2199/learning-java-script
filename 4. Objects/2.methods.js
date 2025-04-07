// methods: functions that are stored as object properties, 



let dog={
    name: "Tommy",
    age: 5,
    color: "Black",
    // bark is a key and function is value
    bark: function(){
        return "Bow Bow";
    }
}


// this --> this keyword is used to refer current object property in which it is used
const person = {
    name: "John",
    age: 30,

    // method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

//  Inside the introduce() method, we used this.name and this.age to refer to the name and age keys of the same person object.


// add method to object

// student object
let student = {
    name: "John"
};

// add new method
student.greet = function () {
    console.log("Hello");
};

console.log(student); // function added

// access greet() method
student.greet();
