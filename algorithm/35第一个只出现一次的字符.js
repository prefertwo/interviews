/**
 * 剑指offer面试题35：第一个只出现一次的字符。
 * 在字符串中找出第一个只出现一次的字符。
 * 例如输入 abaccdef 则输出 b
 */

String.prototype.firstAppear = function () {
  const len = this.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[this[i]]) {
      obj[this[i]] += 1;
    } else {
      obj[this[i]] = 1;
    }
  }
  for (let j in obj) {
    if (obj[j] === 1) {
      return j;
    }
  }
  return " ";
};

const str = "leetcodeleetcode2";
console.log(str.firstAppear());
// 2

/**
 * 若是在添加一个条件，字符串中只包含小写字母。
 * 则可以有下面方法
 */

String.prototype.firstAppear = function () {
  let arr = new Array(26).fill(0);

  const len = this.length;

  for (let i = 0; i < len; i++) {
    arr[this[i].charCodeAt() - 97]++;
  }
  for (let j = 0; j < len; j++) {
    if (arr[this[j].charCodeAt() - 97] === 1) {
      return this[j];
    }
  }
  return " ";
};

const str2 = "leetcode";
console.log(str2.firstAppear());

/**
 * 根据下标判断
 */

String.prototype.firstAppear = function () {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const code = this.charAt(i);
    // 从出现的第一个下标往后，如果不存在则是目标值
    if (this.indexOf(code) === i && this.indexOf(code, i + 1) === -1) {
      return code;
    }
  }
  return " ";
};

const str3 = "leetcode";
console.log(str3.firstAppear());
