export default function hasValuesFromArray(setObj, arrayObject) {
  for (const element of arrayObject) {
    if (!setObj.has(element)) {
      return false;
    }
  }
  return true;
}
