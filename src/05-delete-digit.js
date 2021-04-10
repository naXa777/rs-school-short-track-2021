/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const minDigit = str
    .split('')
    .map((x) => +x)
    .reduce((acc, x) => Math.min(acc, x), 9);
  const pos = str.lastIndexOf(`${minDigit}`);
  return +(str.slice(0, pos) + str.slice(pos + 1));
}

module.exports = deleteDigit;
