// we use class to make blueprint of object

// class is a template for creating objects
class car{
    name;
    model;
    color;
    sound= (sound)=>{
        return (`${this.name} is making ${sound}`);
    };
};

let car1= new car(); // objet of car class
car1.name="BMW";
car1.model="2020";
car1.color="black";
car1.sound("vroom vroom");

console.log(car1);
console.log(car1.sound("vroom vroom"));
