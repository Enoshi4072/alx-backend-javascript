function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }

  if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE') {
    throw new Error('Invalid type');
  }

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
