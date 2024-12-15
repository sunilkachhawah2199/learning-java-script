// constructor is a special method that is called when an object is created.
// constructor is used to initialize the object and we can pass the value to the object while creating it.


class car{
    
    name;
    model;
    color;
    sound;
    constructor(name, model, color, sound){
        this.name=name;
        this.model=model;
        this.color=color;
        this.sound=sound;
    }
    engine= ()=>{
        return (`${this.name} is making ${this.sound}`);
    };
};


let car1=new car("BMW", "2020", "black", "vroom vroom");
console.log(car1);
console.log(car1.engine());