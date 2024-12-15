// in Js every object have special property called prototype
// prototype store reference of object from which it is inherited like for array type it will have toString() method but this method is not defined in array object but it is defined it is available in prototype object and it is reference to object from which it is inherited

// when object and prototype object have same method then object method will be called
let student ={
    name:"Sunil",
    age:30
};

// create prototype

let emp={
    name:"John",
    age:20,
    // simple way to define method inside object
    tax(){
        console.log("Tax is 20%");
    }
}

let sunil={
    name:"Sunil",
    age:30
    // same tax like emp
};

// set emp as prototype of sunil
sunil.__proto__=emp;