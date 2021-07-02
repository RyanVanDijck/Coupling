const test = require('../test-framework.js');
const SpaceShip = require('../src/spaceship.js');

const spaceship = new SpaceShip();
test.it('SpaceShip Test', () => {
    test.assertEquals(spaceship.distance, 100000);
});