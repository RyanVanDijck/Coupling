const test = require('../test-framework.js');
const Skateboard = require('../src/skateboard.js');

const skateboard = new Skateboard();
test.it('Skateboard Test', () => {
    test.assertEquals(skateboard.distance, 100);
});