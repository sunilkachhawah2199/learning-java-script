// super keyword is used to call the parent class constructor and methods.

class human{
    constructor(){
        console.log("parent class constructor");
    }
    species(name){
        console.log(`${name} is a human`);
    };
}

class baby extends human{
    constructor(){
        console.log("enter in child class constructor");
        super(); // calling parent class constructor
        console.log("exit from child class constructor");
    }

    work(){
        super.species("John"); // call super class method
        console.log("I am doing work");
    }
}

let newB=new baby();
newB.work();

