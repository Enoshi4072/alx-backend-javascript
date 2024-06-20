const assert = require('assert');

function calculateNumber(type, a, b) {
  assert(typeof a === 'number' && typeof b === 'number', 'Arguments must be numbers');
  assert(type === 'SUM' || type === 'SUBTRACT' || type === 'DIVIDE', 'Invalid type');

  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) return 'Error';
      return roundedA / roundedB;
  }
}

module.exports = calculateNumber;
