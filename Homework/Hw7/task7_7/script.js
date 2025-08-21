class Car{
    constructor(model, manufacturer,year, maxSpeed,engine){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info (){
        for (let key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newYear){
        if (newYear > 1815){
            this.year = newYear;
        }
    };
    addDriver (driver){
        this.driver = driver;
    };
}
let car = new Car('audi', 'germany', 2023, 250, 3.0);
console.log(car);

car.drive(250)
car.info()
car.increaseMaxSpeed(40)
car.changeYear(2005)
car.addDriver({})