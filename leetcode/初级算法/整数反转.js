/**
 * 整数反转
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 *
 * 详细：https://leetcode-cn.com/problems/reverse-integer/
 *
 * 题解：https://leetcode-cn.com/problems/reverse-integer/solution/zheng-shu-fan-zhuan-by-leetcode/
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let num = 0;
  const MAX = Math.pow(2, 31) - 1;
  const MIN = 0 - Math.pow(2, 31);
  if (x > 0) {
    num = Number(x.toString().split("").reverse().join(""));
    if (num > MAX) num = 0;
  }
  if (x < 0) {
    num = 0 - Number(x.toString().slice(1).split("").reverse().join(""));
    if (num < MIN) num = 0;
  }
  return num;
};

/* 位运算符 */
const reverse = (x) => {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0; // 取整
  }
  return (result | 0) === result ? result : 0; // (result | 0) === result 判断是否越界
};
