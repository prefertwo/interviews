/**
 * 宝石与石头
 *
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 *
 *
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 *
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 *
 */

/**
 * 暴力破解
 * 字符串遍历
 *
 * @param {string} J
 * @param {string} S
 * @returns {number}
 */
const numJewelsInStones = (J, S) => {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    let word = S.charAt(i);
    if (J.includes(word)) {
      count++;
    }
  }
  return count;
};

const numJewelsInStones = (J, S) => {
  J = J.split("");
  return S.split("").reduce((prev, val) => {
    for (const ch of J) {
      if (ch === val) {
        return prev + 1;
      }
    }
    return prev;
  }, 0);
};

/**
 * 哈希集合
 */
const numJewelsInStones = (J, S) => {
  let setA = new Set(J.split(""));
  return S.split("").reduce((acc, cur) => {
    if (setA.has(cur)) {
      acc++;
    }
    return acc;
    // 上面判断可以改为如下
    // return acc + setA.has(cur)
  }, 0);
};
