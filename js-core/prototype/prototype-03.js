function Vehicle(make, model, color) {
  this.make = make
  this.model = model
  this.color = color
  this.guests = ['Person 1', 'Person 2']
}

Vehicle.prototype.getInfo = function() {
  console.log(`${this.make} - ${this.model} - ${this.color}`)
}

car1 = new Vehicle('make 1', 'model 1', 'color 1')
car2 = new Vehicle('make 2', 'model 2', 'color 2')

car1.guests.push('Person 3')
console.log(car1.guests)
console.log(car2.guests)