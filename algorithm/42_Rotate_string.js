/**
 * 剑指offer面试题42：翻转单词顺序 VS 左旋转字符串
 * 输入一个英文句子，翻转句子中的单词的顺序，但单词内字符的顺序不变。
 * 为简单起见，标点符号和普通字母一样处理。
 * 例如输入 “I am a student.”
 * 输出：“student. a am I”
 */

/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 定义一个函数实现字符串的左旋转操作的功能。
 * 比如输入 abcdefg 和数字 2
 * 输出 cdefgab
 */

/**
 *
 * @param {string} s
 * @param {number} n
 * @returns {string}
 */
const reverseLeftWords = (s, n) => {
  if (!s || s.length <= n) return s;
  // 字符串拼接再截取
  s += s.slice(0, n);
  return s.substr(n);
};

const reverseLeftWords2 = (s, n) => {
  return s.slice(n) + s.slice(0, n);
  // return s.slice(n).concat(s.slice(0,n));
};

let str = "guozheng";
console.log(reverseLeftWords2(str, 12));
