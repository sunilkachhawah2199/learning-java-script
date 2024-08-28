// object : store data in key value pair, key is string, value can be anything, object can store function as well, object can store another object as well, object can store array as well, unordered collection of key value pair, key-value called  as property, object is mutable, 


let student={
    name:"Sunil",
    age: "25",
    Address : {
        city: "Bangalore",
        state: "Karnataka"
    }
}

// accessing object
console.log(student); // { name: 'Sunil', age: '25', Address: { city: 'Bangalore', state: 'Karnataka' } }
console.log(student.name); // Sunil
console.log(student.Address.city); // Bangalore

// accessing object using bracket notation
console.log(student["name"]); // Sunil

// modifying object
student.name= "Anil";
console.log(student.name); // Anil

//adding new property to object
student.number="+918387841596";
console.log(student.number); // +918387841596

// deleting property from object
delete student.number;

// include function in object
// which function defined in object called as method
let student1={
    name:"Sunil",
    age: "25",
    Address : {
        city: "Bangalore",
        state: "Karnataka"
    },
    getDetails: function(){
        return this.name + " " + this.age;
    }
}

// calling function from object
console.log(student1.getDetails()); // Sunil 25