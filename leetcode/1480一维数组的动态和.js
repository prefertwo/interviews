/**
 *
 * 给你一个数组 nums
 * 数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i])
 *
 * 请返回 nums 的动态和
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4]
 *
 */

/**
 * 第一印象：相当于取出数组的前 n 个值，累加
 */

const runningSum = (nums) => {
  let arrT = [];
  for (let i = 1; i <= nums.length; i++) {
    arrA = nums.slice(0, i);
    arrT.push(arrA.reduce((a, b) => a + b));
  }
  return arrT;
};
// 执行用时：96 ms, 在所有 JavaScript 提交中击败了22.13%的用户
// 内存消耗：44.2 MB, 在所有 JavaScript 提交中击败了5.05%的用户

/**
 * 替换数组中的每一项
 * @param {array} nums
 */
const runningSum2 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了46.98%的用户
// 内存消耗：38.3 MB, 在所有 JavaScript 提交中击败了18.14%的用户

const nums = [1, 2, 3, 4, 5];
console.log("returns == ", runningSum2(nums));

/**
 *
 * 总之，里面会有一个循环（for / map / forEach 等可以循环的方法都可以）
 * 或者更新原数组的每一项，或者在一个临时新数组添加元素
 *
 */
