function Vehicle(make, model, color) {
  this.make = make
  this.model = model
  this.color = color
  this.getInfo = function() {
    console.log(`${this.make} - ${this.model} - ${this.color}`)
  }
}

Vehicle.prototype.year = 2012

car1 = new Vehicle('make 1', 'model 1', 'color 1')
car2 = new Vehicle('make 2', 'model 2', 'color 2')

console.log(car1)
console.log(car2)
console.log(car1.year)
console.log(car2.year)
car1.year = 2013

console.log(car1.year)
console.log(car2.year)

// reference: https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b