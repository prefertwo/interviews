/**
 * 判断数组中是否有重复数字。(和去重思想类似)
 */

let arrN = [3, 6, 9, 1];
let arrR = [3, 6, 9, 1, 3];
// 简单粗暴效率低，时间复杂度为 O(n^2)
function hasDuplicateValue(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// console.log(hasDuplicateValue(arrN));

// 线性解决，时间复杂度为 O(n)。数组去重也可用此法，稍作改变，将置位1的位置同时给一个新数组赋值，去掉return true，最后新数组就是去重之后的
function hasDuplicateValue2(arr) {
  if (!Array.isArray(arr)) return "Invalid Input";
  let obj = {};
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicateValue2(arrN));
console.log(hasDuplicateValue2(arrR));
