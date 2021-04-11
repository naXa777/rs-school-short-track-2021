function getDomainOfLevel(domain, level) {
  const parts = domain.split('.').slice(-level);
  return {
    supdomain: parts.join('.'),
    reversed: `.${parts.reverse().join('.')}`,
    actualLevel: parts.length,
  };
}

function countMatches(domain, domains) {
  return domains.reduce((matches, d) => {
    if (domain === d || d.endsWith(`.${domain}`)) {
      return matches + 1;
    }
    return matches;
  }, 0);
}

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  for (let i = 0; i < domains.length; ++i) {
    const maxLevel = domains[i].split('.').length + 1;
    for (let level = 1; level < maxLevel; ++level) {
      const info = getDomainOfLevel(domains[i], level);
      if (info.actualLevel >= level) {
        stats[info.reversed] = countMatches(info.supdomain, domains);
      }
    }
  }
  return stats;
}

module.exports = getDNSStats;
