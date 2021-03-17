/**
 * 实现 strStr()
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 * 详细：https://leetcode-cn.com/problems/implement-strstr/
 *
 * 题解：https://leetcode-cn.com/problems/implement-strstr/solution/shi-xian-strstr-by-leetcode/
 *
 *
 */

/**
 * 利用 match 方法，寻找匹配项
 * 也可以直接用 search 方法（此题的目的类似是实现一个 search 方法）
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr1 = function (haystack, needle) {
  if (!needle) return 0;
  return haystack.match(needle) ? haystack.match(needle).index : -1;
};

// 子串逐一比较 - 线性时间复杂度
const strStr2 = function (haystack, needle) {
  const n = haystack.length;
  const l = needle.length;

  for (let i = 0; i < n - l + 1; i++) {
    if (haystack.substring(i, i + l).includes(needle)) {
      return i;
    }
  }
  return -1;
};

// 双循环
const strStr3 = function (haystack, needle) {
  if (needle === "") return 0;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      var flag = true;
      for (var j = 1; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          flag = false;
          break;
        }
      }
      if (flag) return i;
    }
  }
  return -1;
};
// const strStr2 = function (haystack, needle) {};

const haystack1 = "hello",
  needle1 = "ll";

const haystack2 = "aaaaa",
  needle2 = "bba";

const haystack3 = "mississippi",
  needle3 = "issip";

// console.log(strStr3(haystack1, needle1));
// console.log(strStr3(haystack2, needle2));
console.log(strStr3(haystack3, needle3));
// console.log(strStr3("", ""));
