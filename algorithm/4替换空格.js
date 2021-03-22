/**
 * 剑指offer面试题4：替换空格。
 * 实现一个函数，把字符串中的每个空格替换为%20.
 * 例如输入“we are happy.” 则输出为“we%20are%20happy.”
 *
 * 详细：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 *
 * 题解：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/mian-shi-ti-05-ti-huan-kong-ge-by-leetcode-solutio/
 *
 */

/**
 * 字符串转数组，再转回字符串
 * @param {string} s
 * @returns {string}
 */
const replaceSpace = (s) => {
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == " ") {
      sArr.splice(i, 1, "%20");
    }
  }
  return sArr.join("");
};

// 字符串方法
const replaceSpace2 = (s) => {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    console.log("char=", char);
    if (char == " ") {
      res += "%20";
    } else {
      res += char;
    }
  }
  return res;
};

console.log(replaceSpace2("gu  o z"));
