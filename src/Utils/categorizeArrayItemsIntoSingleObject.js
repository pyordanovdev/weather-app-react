export default async function categorizeArrayItemsIntoSingleObject(array, key) {
  const categorizedArray = array.reduce((acc, curr) => {
    const date = curr[key].split(" ")[0];
    if (acc[date]) {
      acc[date].push(curr);
    } else {
      acc[date] = [curr];
    }
    return acc;
  }, {});
  return categorizedArray;
}
