/**
 * 剑指offer面试题49：把字符串转换成整数
 *
 * 详细：https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/
 * 类似：https://leetcode-cn.com/problems/string-to-integer-atoi/
 *
 * 题解：https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58mttv/
 *
 */

/**
 * 利用正则判断
 *
 * @param {string} str
 * @return {number}
 */
const strToInt1 = function (str) {
  const reg = /^[+/-]?(\d)+/g;
  const num = Number(str.trim().match(reg));
  if (!num) return 0;
  const min = -(2 ** 31),
    max = 2 ** 31 - 1;
  return num < min ? min : num > max ? max : num;
};

/**
 * 直接遍历字符串
 *
 * @param {string} str
 * @return {number}
 */
const strToInt = function (str) {
  let res = 0,
    i = 0,
    sign = 1,
    max = 2 ** 31 - 1,
    bndry = Math.floor(max / 10), // 向下取整
    min = -(2 ** 31),
    length = str.length;
  if (length === 0) return res;
  while (str.charAt(i) === " ") {
    if (++i === length) return res; // 所有都是空格情况
  }
  if (str.charAt(i) === "-") {
    sign = -1;
  }
  if (str.charAt(i) === "-" || str.charAt(i) === "+") {
    i++;
  }
  for (let j = i; j < length; j++) {
    if (str.charAt(j) < "0" || str.charAt(j) > "9") break;
    // console.log("res==", res, bndry, str.charAt(j));
    // 边界比较
    if (res > bndry || (res === bndry && str.charAt(j) > "7")) {
      return sign === 1 ? max : min;
    }
    res = res * 10 + (str.charAt(j) - "0");
  }
  return sign * res;
};

const str1 = "        123",
  str2 = " -42 ",
  str3 = " +8773guo",
  str4 = " 98279384792";
str5 = "2147483648";
// console.log(strToInt(str1));
// console.log(strToInt(str2));
// console.log(strToInt(str3));
// console.log(strToInt(str4));
console.log(strToInt(str5));
