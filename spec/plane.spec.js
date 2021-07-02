const test = require('../test-framework.js'); 
const Plane = require('../src/plane.js'); 

const plane = new Plane(); 
test.it('Plane Test', () => {
    test.assertEquals(plane.distance, 10000); 
});