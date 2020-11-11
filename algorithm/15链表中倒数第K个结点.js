/**
 * 剑指offer面试题15：链表中倒数第K个结点。
 * 输入一个链表，输出链表中倒数第 k 个结点。
 * 为了符合大多数人的习惯，本题从1开始计数，即链表的尾结点是倒数第一个结点。
 * 例如一个链表有6个结点，从头结点开始它们的值依次是1，2，3，4，5，6。
 * 这个链表的倒数第3个结点是值为4的结点。
 *
 * 注意3个点：链表为空，k===0，k > 链表长度。
 * 当一个指针不能解决问题的时候，要考虑用两个指针。
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function FindkthToTail1(arr, k) {
  // 这里要不要判断数据类型呢？？？
  if (!arr || arr.length === 0 || k === 0 || k > arr.length) return "非法数据";
  const indexTarget = arr.length - k;
  return arr[indexTarget];
}

// console.log( FindkthToTail('oguozlenalognlaskdflni', 12) );
// console.log( FindkthToTail(arr, 12) );

/**
 * 指针解法：
 * 先让一个指针走k-1步，然后让第二个指针走，当第一个指针走到最后，第二个指针刚好到达倒数第 k 的位置。
 */
function FindkthToTail2(arr, k) {
  if (!arr || arr.length === 0 || k === 0 || k > arr.length) return "非法数据";
  let target;
  let index2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > k - 1) {
      index2++;
    }
    if (i == arr.length - 1) {
      target = arr[index2];
    }
  }
  return target;
}

console.log(FindkthToTail2(arr, 2));
