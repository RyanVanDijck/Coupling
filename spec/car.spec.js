const test = require('../test-framework.js'); 
const Car = require('../src/car.js'); 

const car = new Car(); 
test.it('Car Test', () => {
    test.assertEquals(car.distance, 1000); 
});