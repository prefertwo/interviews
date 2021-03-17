/**
 * 外观数列
 *
 * 给定一个正整数 n ，输出外观数列的第 n 项。
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 *
 * 详情：https://leetcode-cn.com/problems/count-and-say/
 *
 * 题解：
 *
 */

/**
 * 正则方法
 *
 * @param {number} n
 * @return {string}
 */

const countAndSay1 = function (n) {
  let prev = "1";
  for (let i = 1; i < n; i++) {
    // 正则：\1* 表示第一个子项（每个小括号表示一个子项）重复0次或者多次
    prev = prev.replace(/(\d)\1*/g, (item) => {
      console.log("item==", item);
      return `${item.length}${item[0]}`;
    });
    console.log("prev==", prev);
  }
  return prev;
};

/* 递归 + 计数 */
const countAndSay2 = function (n) {
  if (n === 1) return "1";
  else {
    var str = countAndSay2(n - 1);
    var temp = str[0];
    var count = 0;
    var ans = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] === temp) count++;
      else {
        // ans += count.toString() + temp.toString();
        ans += "" + count + temp;
        temp = str[i];
        count = 1;
      }
      // if (i===str.length-1) ans += count.toString() + temp.toString();
      if (i === str.length - 1) ans += "" + count + temp;
    }
    return ans;
  }
};

// console.log();
console.log(
  countAndSay1(6) // '1211'
);

const str = "1211122223333311113333322222133";

console.log(str.match(/(\d)(\d)\1*/g));
// console.log(str.match(/(\d){2}(\d)\2*/g));
