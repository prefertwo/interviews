/**
 * 删除中间节点
 *
 * 实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
  let current = node.next;
  node.val = current.val;
  while (current.next) {
    current = current.next;
    node = node.next;
    node.val = current.val;
  }
  // 对最后的元素添加了判断
  node.next = null;
};

// 如果没有判断条件
const deleteNode2 = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
