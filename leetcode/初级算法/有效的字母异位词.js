/**
 * 有效的字母异位词
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 详细：https://leetcode-cn.com/problems/valid-anagram/
 *
 * 题解：https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode-solution/
 *
 */

/**
 * 哈希表
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;
  const len = s.length;
  const obj = {}; // 利用对象存储
  // 存储 s 的字母及次数
  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  // 找出 t 包含的字母，减少次数
  for (let i = 0; i < len; i++) {
    const item = t[i];
    if (obj[item]) {
      obj[item] -= 1;
    } else {
      return false;
    }
  }
  /* 下面的遍历可以不要，因为字符串长度相等 并且不是 异位词时，必然会走上面的 else */
  // 遍历 obj 如果有 > 1 的 存在则 false
  // for (let [k, v] in obj) {
  //   if (v > 0) {
  //     return false;
  //   }
  // }
  return true;
};

/* 哈希表2：利用数组，因为考虑到只包含小写字母，利用 26位的空数组 */
const isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  const len = s.length;
  const num = "a".codePointAt(0);

  let arr = new Array(26).fill(0);

  for (let i = 0; i < len; i++) {
    arr[s.codePointAt(i) - num]++;
  }

  for (let i = 0; i < len; i++) {
    arr[t.codePointAt(i) - num]--;
    if (arr[t.codePointAt(i) - num] < 0) {
      return false;
    }
  }
  return true;
};

/* 先排序，如果是异位词，则排序后应该是字符串相等的 */
const isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;
  // 排序，重组
  const s1 = s.split("").sort().join("");
  const t1 = t.split("").sort().join("");
  return s1 === t1;
};

const s1 = "anagram",
  t1 = "nagaram";
const s2 = "rat",
  t2 = "car";

console.log(isAnagram2(s1, t1));
console.log(isAnagram2(s2, t2));
