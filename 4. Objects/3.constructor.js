// constructor is a function that is used to create an object. It is a special method that is called when an object is instantiated. It is used to initialize the object.   
// wach object created using constructor function is called as instance of object and it is unique object
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1=new Student("Sunil", 25);
console.log(s1); // Student { name: 'Sunil', age: 25 }

let s2=new Student("Anil", 30);
console.log(s2); // Student { name: 'Anil', age: 30 }


// object vs constructor: we can create multiple object using constructor, object is single instance, constructor is used to create object

// use object literal to create
// a single object person
let person = {
    name: "Sam"
}

// use constructor function
function Person () {
    this.name = "Sam"
}

// create multiple objects
// from constructor function
let person1 = new Person();
let person2 = new Person();


// add new property to constructor: we can add new property to constructor function using prototype
Person.prototype.age = 25;

console.log(person1.age); // 25