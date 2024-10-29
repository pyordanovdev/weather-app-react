/**
 * Takes an array of objects and categorizes them into a single object with
 * the key provided as the key for each category.
 *
 * @param {array} array - The array of objects to be categorized
 * @param {string} key - The key in the objects to be used for categorization
 * @returns {object} An object with the categorized data
 */
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
