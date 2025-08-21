function Car(model, manufacturer,year, maxSpeed,engine){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

   this.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
};

   this.info = function (){
       for (let key in this){
           console.log(key, this[key]);
       }
}
   this.increaseMaxSpeed =function (newSpeed){
   this.maxSpeed = maxSpeed + newSpeed;
    }
    this.changeYear = function(newYear){
       if (newYear > 1815){
           this.year = newYear;
       }
    }
this.addDriver = function(driver){
       this.driver = driver;
}
}
let car = new Car('audi', 'germany', 2023, 250, 3.0);
console.log(car);

car.drive(250)
car.info()
car.increaseMaxSpeed(40)
car.changeYear(5)
car.addDriver()
