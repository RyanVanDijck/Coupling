const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');
const SpaceShip = require('../src/spaceship.js');

const spaceship = new SpaceShip();
const car = new Car();
const plane = new Plane(); 
const skateboard = new Skateboard(); 

const move = (vehicle) => {
    return `moved ${vehicle.move()}m`; 
  
};

module.exports = move;



console.log(move(car)); 
console.log(move(plane)); 
console.log(move(skateboard));
console.log(move(spaceship));