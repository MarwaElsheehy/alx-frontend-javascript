export default function updateUniqueItems(item) {
  if (item instanceof Map) {
    for (const [key, value] of item) {
      if (value === 1) {
        item.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return item;
}
