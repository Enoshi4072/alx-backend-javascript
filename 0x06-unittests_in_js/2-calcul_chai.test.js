const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should add two numbers and round the result', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract second number from the first and round the result', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide first number by the second and round the result', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if the second number is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
