/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encoded = [];
  let char = str[0];
  let count = 1;
  for (let i = 1; i < str.length; ++i) {
    if (str[i] === char) {
      ++count;
    } else {
      if (count > 1) {
        encoded.push(count);
      }
      encoded.push(char);
      char = str[i];
      count = 1;
    }
  }
  if (count > 1) {
    encoded.push(count);
  }
  encoded.push(char);
  return encoded.join('');
}

module.exports = encodeLine;
