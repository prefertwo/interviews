/**
 * 加一
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 详细：https://leetcode-cn.com/problems/plus-one/
 *
 * 题解：https://leetcode-cn.com/problems/plus-one/solution/hua-jie-suan-fa-66-jia-yi-by-guanpengchn/
 *
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10; // 超过10，要取余数 [3, 9, 9];
    if (digits[i] % 10 !== 0) {
      return digits;
    }
  }
  //  如果到这里还没有 return ，则是 999 这种情况
  digits = [...Array(len + 1)].fill(0);
  digits[0] = 1;
  return digits;
};

const digit1 = [1, 2, 3];
const digit2 = [3, 9, 9];
const digit3 = [9, 9, 9];
console.log(plusOne(digit1));
console.log(plusOne(digit2));
console.log(plusOne(digit3));
