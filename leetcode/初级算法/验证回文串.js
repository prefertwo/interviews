/**
 * 验证回文串
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 详细：https://leetcode-cn.com/problems/valid-palindrome/
 *
 * 题解：https://leetcode-cn.com/problems/valid-palindrome/solution/yan-zheng-hui-wen-chuan-by-leetcode-solution/
 *
 */

/**
 * 筛选 + 判断
 *
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome1 = function (s) {
  if (!s) return true;
  let s_good = [];
  const len = s.length;
  // 遍历获取 只有字母和数字的字符串
  for (let i = 0; i < len; i++) {
    const num = s.charCodeAt(i);
    if (
      (num >= "0".charCodeAt() && num <= "9".charCodeAt()) ||
      (num >= "a".charCodeAt() && num <= "z".charCodeAt()) ||
      (num >= "A".charCodeAt() && num <= "Z".charCodeAt())
    ) {
      s_good.push(s[i].toLowerCase());
    }
  }
  // 回文串反转之后 和 反转前相等
  return s_good.join("") === s_good.reverse().join("");
};

/* 利用正则获取  只有字母和数字的字符串, 双指针判断是否为回文串 */
const isPalindrome2 = function (s) {
  if (s.length <= 1) return true;
  const s_good_arr = s.toLowerCase().match(/[A-Za-z0-9]+/gi);
  const s_good = s_good_arr && s_good_arr.length > 0 ? s_good_arr.join("") : "";
  // if (s_good.length <= 1) return true;
  let left = 0,
    right = s_good.length - 1;
  while (left < right) {
    if (s_good[left] !== s_good[right]) {
      return false;
    }
    left++;
    right--;
    if (left >= right) {
      return true;
    }
  }
};

/* 暴力查找：直接遍历字符串，对每一个字符判断是否是要求字符，然后再 前后对比，和 上面的 while 类似 */

const s1 = "A man, a plan, a canal: Panama",
  s2 = "race a car";

console.log(isPalindrome2(s1));
console.log(isPalindrome2(s2));
console.log(isPalindrome2("a"));
console.log(isPalindrome2("dd"));
