/**
 * 字符串中的第一个唯一字符
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 * 详细：
 *
 * 题解：
 *
 * 提示：你可以假定该字符串只包含小写字母。
 *
 */

/**
 * 利用 indexOf 方法
 *
 * @param {string} s
 * @return {number}
 *
 */
const firstUniqChar1 = function (s) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (i === 0) {
      if (s.indexOf(char, i + 1) === -1) return i;
    } else {
      // i==0 时 lastIndexOf 直接使用会有问题，所以分类
      if (s.indexOf(char, i + 1) === -1 && s.lastIndexOf(char, i - 1) === -1)
        return i;
    }
    // 下面更简便的方法
    // === 成立则说明只有一个，切是第一个
    // if(s.indexOf(char) === s.lastIndexOf(char)) return i
  }
  return -1;
};

/* 方法一：使用哈希表存储频数 */
const firstUniqChar2 = function (s) {
  const len = s.length;
  const obj = {};
  // 按顺序遍历，所以第一个次数为 1 的值，就是目标值
  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  for (let [k, v] of Array.from(s).entries()) {
    // console.log("k=", k);
    // console.log("v=", v);
    if (obj[v] === 1) {
      return k;
    }
  }
  return -1;
};

/* 方法二：使用哈希表存储索引 */
const firstUniqChar3 = function (s) {
  const len = s.length;
  const map = new Map();
  // 存储出现一次的值及其下标，多次的置为 -1
  for (let [k, v] of Array.from(s).entries()) {
    if (map.has(v)) {
      map.set(v, -1);
    } else {
      map.set(v, k);
    }
  }
  // 找出，出现一次的下标的最小值
  let min = len;
  for (let v of map.values()) {
    if (v !== -1 && v < min) {
      min = v;
    }
  }
  // 说明不存在
  if (min === len) {
    min = -1;
  }
  return min;
};

/* 方法三：队列 */
// const firstUniqChar4 = function (s) {};

const str1 = "leetcode"; // 0
const str2 = "loveleetcode"; // 2
const str3 = "cc"; // -1

console.log(firstUniqChar3(str1));
console.log(firstUniqChar3(str2));
console.log(firstUniqChar3(str3));

// console.log(Array.from(str3).entries());
