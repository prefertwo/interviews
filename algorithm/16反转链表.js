/**
 * 剑指offer面试题16：反转链表
 *
 * 定义一个函数，输入一个链表的头结点，反转该链表并输出反转链表的头结点。
 *
 * 详细：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/fan-zhuan-lian-biao-by-leetcode-solution-jvs5/
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
