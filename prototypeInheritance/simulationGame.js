function vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed || 0;
  this.fuelType = fuelType;
}

vehicle.prototype = {
  accelerate: function () {
    this.speed += 5;
    console.log(
      `${this.brand} ${this.model} is accelerating so speed is ${this.speed}`
    );
  },
  brake: function () {
    this.speed += 5;
    console.log(
      `${this.brand} ${this.model} is Breaking so speed is ${this.speed}`
    );
  },
  refuel: function () {
    console.log(`${this.brand} ${this.model} is refueling`);
  },
};

function car(brand, model, speed, fuelType,numberOfWheels) {
  vehicle.call(this, brand, model, speed, fuelType);
  this.wheels = numberOfWheels || 4;
}

car.prototype = Object.create(vehicle.prototype);
car.prototype.constructor = car;

car.prototype.honk = function () {
  console.log(`${this.brand} ${this.model} is honking`);
};

// Similarly, create an Airplane constructor function that inherits from Vehicle.
// It should have properties numberOfEngines and hasLandingGear and 
// a method takeOff() that logs a message indicating the airplane is taking off.

function airplane(brand, model, speed, fuelType,numberOfEngines,hasLandingGear){
    vehicle.call(this,brand, model, speed, fuelType)
    this.numberOfEngines=numberOfEngines || 4
    this.hasLandingGear=hasLandingGear || true
}
airplane.prototype = Object.create(vehicle.prototype);
airplane.prototype.constructor = airplane;

airplane.prototype.takeOff=function(){
    console.log(`${this.brand} ${this.model} is taking off.`);
};

const myCar = new car('Toyota', 'Camry', 60, 'Gasoline');
const myAirplane = new airplane('Boeing', '747', 500, 'Jet', 4);

myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
