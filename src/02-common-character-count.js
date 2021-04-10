function countOccurrences(s) {
  return s.split('')
    .reduce((obj, ch) => ({
      ...obj,
      [ch]: (obj[ch] || 0) + 1,
    }), {});
}

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const occurrences1 = countOccurrences(s1);
  const occurrences2 = countOccurrences(s2);

  const chars = Object.keys(occurrences1);
  return chars
    .reduce(
      (common, ch) => common + Math.min(occurrences1[ch] || 0, occurrences2[ch] || 0),
      0,
    );
}

module.exports = getCommonCharacterCount;
