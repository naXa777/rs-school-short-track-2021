// eslint-disable-next-line no-unused-vars
const ListNode = require('../extensions/list-node');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let currNode = l;
  while (currNode.next) {
    if (currNode.next.value === k) {
      currNode.next = currNode.next.next;
    }
    currNode = currNode.next;
  }
  if (l.value === k) {
    return l.next;
  }
  return l;
}

module.exports = removeKFromList;
