/**
 * 最长公共前缀
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 详细：https://leetcode-cn.com/problems/longest-common-prefix/
 *
 * 题解：https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode-solution/
 *
 */

/**
 * 看成是一个二维数组，则是判断相同列的最大长度。（很像官方的纵向扫描）
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix1 = function (strs) {
  if (!strs || strs.length === 0) return "";
  const lenArr = strs.length;
  const lenStr = strs[0].length;
  let comPre = "";
  let current_s = strs[0][0];
  for (let i = 0; i < lenStr; i++) {
    current_s = strs[0][i];
    for (let j = 0; j < lenArr; j++) {
      if (!strs[j][i] || strs[j][i] !== current_s) {
        return comPre;
      }
    }
    comPre += current_s;
  }
  return comPre;
};

/* 横向扫描，比较第一个和第二个的公共长度，然后用得到的字符串再和第三个比较，然后依次比较到最后 */
const longestCommonPrefix2 = function (strs) {
  if (!strs || strs.length === 0) return "";

  // const len = strs.length;
  // if (len === 0) return "";
  const comP = (str1, str2) => {
    const len = Math.min(str1.length, str2.length);
    let ret = "";
    for (let i = 0; i < len; i++) {
      if (str1[i] === str2[i]) {
        ret += str1[i];
      } else {
        return ret;
      }
    }
    return ret;
  };

  let originStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    originStr = comP(originStr, strs[i]);
    if (originStr.length === 0) return "";
  }
  return originStr;
};

/* 分治：和上面思路差不太多，分治之后的比较也是用得上面的方法 */
const longestCommonPrefix3 = (strs) => {};

/* 二分查找 */

const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix2(strs1));
console.log(longestCommonPrefix2(strs2));
