export default function updateUniqueItems(map) {
  if (!(map instanceof Map) || map.size === 0) {
    throw new Error('Cannot process');
  }
  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
