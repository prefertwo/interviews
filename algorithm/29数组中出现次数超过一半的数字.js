/**
 * 剑指offer面试题29：数组中出现次数超过一半的数字。
 * 数组中有一个数字出现的次数超过了数组长度的一半，请找出这个数字。
 * 例如输入一个长度为5的数组 [1,2,3,2,2], 2在数组中出现了3次超过了数组长度的一半，因此输出2.
 *
 * 有 3 种方法：摩尔投票法、哈希表统计法、排序取值法
 *
 */

/**
 *
 * 摩尔投票法
 * @param {number []} nums 元数据
 */
const majorityElement = (nums) => {
  let count = 0,
    res = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // if (count === 0) {
    //   res = nums[i];
    // }
    // 简写如下
    count === 0 && (res = nums[i]);
    count += res === nums[i] ? 1 : -1;
  }
  return res;
};

// 排序 （数组排序法）
const majorityElement2 = (nums) => {
  // 利用现成的方法
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

// 利用对象存储（哈希表统计法）
const majorityElement3 = (nums) => {
  if (nums.length < 2) return nums[0]; // 只有一个元素的数组
  let obj = {};
  const len = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (obj[item]) {
      obj[item] += 1;
      // 当 值 大于一半时可以直接返回
      if (obj[item] > len) return item;
    } else {
      obj[item] = 1;
    }
  }
  return "不存在";
};
// const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
const nums = [2, 1];
console.log(majorityElement3(nums));
