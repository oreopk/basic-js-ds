const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  const fakeNode = new ListNode(0);
  fakeNode.next = l;

  let current_element = fakeNode;
  for (;current_element.next !== null;) {
    if (current_element.next.value === k) {
      current_element.next = current_element.next.next;
    }else{
       current_element = current_element.next;
    }
  }
   return fakeNode.next;
}

module.exports = {
  removeKFromList
};
