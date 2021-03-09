/**
 * 两数之和
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 *
 * 详情：https://leetcode-cn.com/problems/two-sum/
 *
 * 题解：https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-solution/
 *
 */

/**
 * 暴力枚举
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = target - nums[i];

    if (nums.indexOf(item, i + 1) !== -1) {
      return [i, nums.indexOf(item, i + 1)];
    }
  }
};

/**
 * 哈希表
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = (nums, target) => {
  const len = nums.length;

  const obj = {};
  obj[nums[0]] = 0;

  for (let i = 1; i < len; i++) {
    const item = target - nums[i];

    // 存在，返回坐标
    if (obj[item] !== undefined) return [i, obj[item]];
    // 不存在，记录
    obj[nums[i]] = i;
  }
};

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

console.log(twoSum2(nums1, target1));
console.log(twoSum2(nums2, target2));
