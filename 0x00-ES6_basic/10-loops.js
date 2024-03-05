export default function appendToEachArrayValue(array, appendString) {
let final_array = [];  
for (let idx of array) {
    final_array.push(appendString + idx);
  }

  return final_array;
}
