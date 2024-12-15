// inheritance -->  to pass the properties and methods of one class to another class.

class car{
    name;
    model;
    runOnRoad(){
        console.log(`${this.name} is running on road`);
    };
}

class flyingCar extends car{
    fly(){
        console.log(`${this.name} is flying`);
    }
}


let flyingCar1= new flyingCar();
flyingCar1.name="BMW";
flyingCar1.model="2020";
flyingCar1.runOnRoad();
flyingCar1.fly();
