/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  while (first + 1 < last) {
    const middle = Math.ceil((first + last) / 2);
    if (value < array[middle]) {
      last = middle;
    } else {
      first = middle;
    }
  }
  if (array[first] === value) {
    return first;
  }
  if (array[last] === value) {
    return last;
  }
  return undefined;
}

module.exports = findIndex;
