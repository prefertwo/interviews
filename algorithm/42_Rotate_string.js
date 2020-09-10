/**
 * 剑指offer面试题42：翻转单词顺序 VS 左旋转字符串
 * 输入一个英文句子，翻转句子中的单词的顺序，但单词内字符的顺序不变。
 * 为简单起见，标点符号和普通字母一样处理。
 * 例如输入 “I am a student.”
 * 输出：“student. a am I”
 */

var reverseWords = function (s) {
  // 需要的操作，去掉两端空格、分割、反转、合并
  return s.split(' ').filter(item => item).reverse().join(' ');
  // 因为用到了 filter 所以可以去掉前面的 trim
};
// 执行用时：76 ms, 在所有 JavaScript 提交中击败了72.54%的用户
// 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了33.63%的用户

const testArr = ['the sun is hot', 'a good   example', "  hello world!  "];
// 期望输出：[ 'hot is sun the', 'example good a', "world! hello" ]
const returnArr = testArr.map(item => reverseWords(item))
console.log(returnArr);


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
