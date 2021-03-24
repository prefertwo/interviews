/**
 * 剑指offer面试题54：表示数值的字符串
 *
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 *
 *
 * 详细：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 *
 *
 * 题解：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solution/mei-you-za-ji-shi-xian-isnumbermei-you-shi-yong-ku/
 *
 *
 */

/**
 * 利用 number 对象
 *
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  if (s.replace(/ /g, "") === "") return false;
  return !isNaN(Number(s));
};

// 循环，一个一个字符做判断
