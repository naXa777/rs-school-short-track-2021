/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const valuesToSort = arr.filter((x) => x !== -1);
  valuesToSort.sort((a, b) => a - b);
  return arr.map((x) => {
    if (x === -1) {
      return -1;
    }
    return valuesToSort.shift();
  });
}

module.exports = sortByHeight;
