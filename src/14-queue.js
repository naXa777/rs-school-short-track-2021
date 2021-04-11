const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.qSize = 0;
  }

  get size() {
    return this.qSize;
  }

  enqueue(element) {
    if (this.size === 0) {
      this.head = new ListNode(element);
      this.tail = this.head;
      this.qSize = 1;
    } else {
      this.tail.next = new ListNode(element);
      this.tail = this.tail.next;
      this.qSize++;
    }
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    const top = this.head.value;
    this.head = this.head.next;
    this.qSize--;
    return top;
  }
}

module.exports = Queue;
