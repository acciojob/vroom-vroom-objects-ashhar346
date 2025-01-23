// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function, inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to set make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit methods from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Adding a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
