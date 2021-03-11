/**
 * 反转字符串
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 *
 * 详细：https://leetcode-cn.com/problems/reverse-string/
 *
 * 题解：https://leetcode-cn.com/problems/reverse-string/solution/fan-zhuan-zi-fu-chuan-by-leetcode-solution/
 *
 */

/**
 * 方法一：双指针
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 */
const reverseString1 = function (s) {
  let len = s.length,
    left = 0,
    right = len - 1;

  // for (; left < right; ) {
  //   [s[left], s[right]] = [s[right], s[left]];
  //   ++left, --right;
  // }

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; // 解构赋值 节省空间
    left++;
    right--;
  }
  console.log(s);
};

const str = "guozhen".split("");
reverseString1(str);
