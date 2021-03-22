/**
 * 剑指offer面试题5：从尾到头打印链表。
 * 输入一个链表的头结点，从尾到头反过来打印出每一个节点的值。
 *
 * 详细：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/mian-shi-ti-06-cong-wei-dao-tou-da-yin-lian-biao-b/
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
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let node = head;
  let arr = [];

  while (node !== null) {
    arr.unshift(node.val);
    node = node.next;
  }
  return arr;
};
