//  objects in js
// we can define method inside object
// we can define object inside object
let student={
    name:"John",
    age:20,
    isEligible:true,
    // method inside object
    fun :function(){
        console.log("Hello");
    },

    // function using arrow
    fun2:(funAge)=>{
        this.age= funAge; // this.age= student.age | we use this to access the object property inside the same object
        console.log(`my age is ${this.age}`);

    }
};


student.fun2(30);