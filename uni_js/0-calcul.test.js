const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the sum of a whole number and a float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the sum of two floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return the sum of a 0 and a float rounded numbers', () => {
    assert.strictEqual(calculateNumber(0, 3), 3);
  });
  it('should return the sum of fractions', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
    assert.strictEqual(calculateNumber(0.8, 0.7), 2);
  });
  it('should return the sum of floats with trails', () => {
    assert.strictEqual(calculateNumber(1.988, 3), 5);
  });
});
