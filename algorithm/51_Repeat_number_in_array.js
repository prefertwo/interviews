/**
 * 剑指offer面试题51：数组中重复的数字。
 * 在一个长度为 n 的数组里面的所有数字都在 0 到 n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复数字。
 * 例如长度为7的数组 [2, 3, 1, 0, 2, 5, 3]
 * 则应输出 2 或者 3
 */

/**
 * 和数组去重同样道理，只不过返回值不一样
 * @param {number[]} arr
 * @returns {number}
 */
const findRepeatNumber = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }
  return "";
};

// 利用 set 数据结构
const findRepeatNumber2 = (arr) => {
  let setT = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (setT.has(arr[i])) {
      return arr[i];
    } else {
      setT.add(arr[i]);
    }
  }
  return -1;
};

// 原地占位（一个萝卜一个坑，多余的萝卜就是重复数字）
const findRepeatNumber3 = (arr) => {
  // let res = -1;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];

    if (cur != i) {
      if (cur === arr[cur]) {
        return cur;
      }
      temp = arr[cur];
      arr[cur] = cur;
      arr[i] = temp;
    }
    console.log(arr);
  }
};

const arr = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber3(arr));
