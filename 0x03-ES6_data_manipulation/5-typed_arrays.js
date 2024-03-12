export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length - 1) {
    throw new Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const int8View = new Int8Array(newBuffer);
  int8View[position] = value;
  return int8View;
}
